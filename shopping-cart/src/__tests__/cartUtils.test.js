import { calculateTotal, calculateLength } from "../components/utils/cartUtils";
import { assert } from "chai";

describe('Calculation tests', () => {

    it('test_empty_cart', () => {
        const cart = [];
        const result = calculateTotal(cart);
        assert.equal(result, 0, 'result does not equal 0');
    });

    it('test_single_item_cart', () => {
        const cart = [{qty: 1, price: 10}];
        const result = calculateTotal(cart);
        assert.equal(result, 10, 'result does not equal 10');
    });

    it('test_multiple_item_cart', () => {
        const cart = [{qty: 1, price: 10}, {qty: 2, price: 5}];
        const result = calculateTotal(cart);
        assert.equal(result, 20, 'result does not equal 20');
    });

    it('test_decimal_item', () => {
        const cart = [
            { name: 'item1', qty: 1, price: 10.5 },
            { name: 'item2', qty: 2, price: 5.25 }
        ];
        const result = calculateTotal(cart)
        assert.equal(result, 21, 'result does not equal 21');
    });

    it('test_empty_cart_returns_zero', () => {
        const cart = [];
        const result = calculateLength(cart);
        assert.equal(result, 0, 'result does not equal 0')
    });

    it('test_cart_with_one_item_returns_quantity_of_item', () => {
        const cart = [{ qty: 1 }];
        const result = calculateLength(cart);
        assert.equal(result, 1, 'result does not equal 1')
    });

    it('test_cart_with_multiple_items_returns_sum_of_quantities', () => {
        const cart = [{ qty: 1 }, { qty: 2 }, { qty: 3 }];
        const result = calculateLength(cart);
        assert.equal(result, 6, 'result does not equal 6')
    });
});