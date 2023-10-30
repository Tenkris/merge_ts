import { merge } from '../src/merge';

describe('merge function', () => {
    it('should merge two sorted arrays correctly', () => {
        expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
        expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]);
        expect(merge([], [])).toEqual([]);
    });

});
