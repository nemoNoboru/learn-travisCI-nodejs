import Nodo from './nodo';

export default class LinkedList {
	constructor() {
		this.first = new Nodo(null)
		this.last = this.first
	}

	is_empty() {
		return !this.first.next
	}

	_search_element(i) {
		var t = 0
		var actual = this.first
		if (i == 0) {
			return actual
		}
		while (this.first.next && t < i) {
			actual = actual.next
		}
		return actual
	}

	add(payload) {
		if (this.is_empty()) {
			this.first = new Nodo(payload)
			this.last = this.first
		} else {
			this.last.next = new Nodo(payload)
			this.last = this.last.next
		}
	}

	get(i) {
		var actual = this._search_element(i).next
		return actual ? actual.payload : null
	}

	remove(i) {
		var previous_to_remove = this._search_element(i)
		var to_remove = previous_to_remove.next
		if (to_remove) {
			to_remove = to_remove.next
		}
		previous_to_remove.next = to_remove
	}
}