import { assert } from 'chai';
import Block from './Block';

class BlockComponent extends Block {
    render() {
        return `<div>Test</div>`
    }
}

const block = new BlockComponent({});

describe('Block', () => {
    before(() => {
        block.setProps({ prop: 'testProp' });
    });

    it('метод render возвращает правильное содержимое', () => {
        assert.equal(block.getContent().innerHTML, 'Test');
    });

    it('setProps меняет пропсы компонента', () => {
        block.setProps({ __id: 'test' });
        assert.deepEqual(block.props, { __id: 'test', prop: 'testProp' });
    });
});