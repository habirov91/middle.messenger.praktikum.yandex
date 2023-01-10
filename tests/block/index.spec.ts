import { expect } from 'chai';
import {isEqual} from 'shared/functions/is-equal';
import { Indexed } from '../../src/shared/types';

class Block {
  props: Indexed;

  constructor(initialProps: Indexed) {
    this.props = initialProps;
  }

  didPropsUpdate(oldProps: Indexed, newProps: Indexed) {
    if (!isEqual(oldProps, newProps)) {
      return 'props updated';
    }

    return 'props are the same';
  }

  setProps(props: Indexed) {
    const oldProps = { ...this.props };
    this.props = props;
    return this.didPropsUpdate(oldProps, this.props);
  }
}

const block = new Block({ firstProp: 'first', secondProp: 'second' });

describe('Block props', () => {
  it('block returnes proxy props', () => {
    expect(block).to.have.ownProperty('props');
  });
});

describe('Block props update', () => {
  it('block props should initiate update, if props changed', () => {
    const updated = block.setProps({ firstProp: 'first', thirdProp: 'third' });
    expect(updated).to.eql('props updated');
  });

  it("block props should not initiate update, if props didn't changed", () => {
    const notUpdated = block.setProps({
      firstProp: 'first',
      thirdProp: 'third',
    });
    expect(notUpdated).to.eql('props are the same');
  });
});
