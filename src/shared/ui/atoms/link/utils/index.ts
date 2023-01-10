import {Router} from 'shared/classes';

const defaultClick = (e: MouseEvent) => {
  e.preventDefault();
  const target = e.currentTarget as HTMLAnchorElement;
  if (!target) {
    throw new Error('Provide anchor');
  }
  Router.go(target.pathname);
};

export default defaultClick;
