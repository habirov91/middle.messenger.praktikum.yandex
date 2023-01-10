export abstract class BaseAPI<P, T> {
  create(_props?: P): T {
    throw new Error('Not implemented');
  }

  request(_props?: P): T {
    throw new Error('Not implemented');
  }

  update(_props?: P): T {
    throw new Error('Not implemented');
  }

  delete(_props?: P): T {
    throw new Error('Not implemented');
  }
}
