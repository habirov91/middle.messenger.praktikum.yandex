import { expect } from 'chai';

class History {
  length = 0;

  init: string[] = [];

  pushState(pathname: string) {
    this.length++;
    this.init.push(pathname);
  }
}

const window = {
  history: new History(),
};

class Router {
  routes: string[] = [];

  history = window.history;

  use(pathname: string) {
    this.routes.push(pathname);
  }

  go(pathname: string) {
    const route = this.getRoute(pathname);

    if (route) {
      this.history.pushState(pathname);
    }
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route === pathname) ?? 'error-layout page';
  }
}

const router = new Router();

describe('Router - add', () => {
  it('should add routes to route list', () => {
    router.use('/');
    router.use('/profile-layout');

    expect(router.routes.length).to.eql(2);
  });
});

describe('Router - getRoute', () => {
  it('should find required route if exists', () => {
    const route = router.getRoute('/');

    expect(route).to.eql('/');
  });
  it("should return error-layout page if route doesn't exist", () => {
    const error = router.getRoute('/non-existent-path');

    expect(error).to.eql('error-layout page');
  });
});

describe('Router - go', () => {
  it('should change window history', () => {
    router.go('/');
    router.go('/profile-layout');

    expect(window.history.length).to.eql(2);
  });
});
