const should = require('should')
import LinkedList from '../src/linked-list';

var linkedList = null

describe('LinkedList', () => {

	beforeEach(function () {
		linkedList = new LinkedList();
	});

	describe('#add()', () => {
		it('should add things if empty', () => {
			linkedList.add(1)
		})

		it('should add things', () => {
			linkedList.add(1)
			linkedList.add(2)
		})
	})

	describe('#get()', () => {
		it('should get things', () => {
			linkedList.add("1")
			linkedList.add("2")
			linkedList.add("3")
			var l = linkedList.get(0)
			"1".should.be.equal(l)
			l = linkedList.get(1)
			"2".should.be.equal(l)
			l = linkedList.get(2)
			"3".should.be.equal(l)
		})

		it('should get empty', () => {
			var l = linkedList.get(0)
			should.not.exist(l)
		})
	})

	describe('#remove()', () => {
		it("should remove", () => {
			linkedList.add("1")
			linkedList.remove(0)
			var l = linkedList.get(0)
			should.not.exist(l)
		})
		it("should remove empty", () => {
			linkedList.remove(9)
		})
	})

	describe('#map()', () => {
		it('should do a map', () => {
			var solution = [2, 4, 6, 8]
			linkedList.add(1)
			linkedList.add(2)
			linkedList.add(3)
			linkedList.add(4)

			var l = linkedList.map((x) => { return x * 2})
			solution.should.match(l)
		})
	})
})
