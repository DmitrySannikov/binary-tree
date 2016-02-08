'use strict';

class Leaf{
	constructor(data) {
		this.data = data;
		this.right = null;
		this.left = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	insert(data) {

		if (!this.root) {
			this.root = new Leaf(data);
			return;
		}

		var curent = this.root;

		while (curent) {
			if (data < curent.data) {
				if (curent.left === null) {
					curent.left = new Leaf(data);
					return;
				} else {
					curent = curent.left;
				}
			} else if (data > curent.data) {
					if (curent.right === null) {
						curent.right = new Leaf(data);
						return;
					} else {
							curent = curent.right;
					}
			} else {
				console.log("error");
				return;
			}
		}
	}

	contains(data) {
		var need_element = false,
				parent = null,
				curent = this.root;

		while (!need_element && curent) {
			if (data < curent.data){
				parent = curent;
				curent = curent.left;
			} else if (data > curent.data) {
				parent = curent;
				curent = curent.right;
			} else {
				need_element = true;
			}
		}
		return need_element;
	}

	remove(data) {
		var need_element = false,
				parent = null,
				curent = this.root,
				count_child = 0;

		while (!need_element && curent) {
			if (data < curent.data){
				parent = curent;
				curent = curent.left;
			} else if (data > curent.data) {
				parent = curent;
				curent = curent.right;
			} else {
				need_element = true;
			}
		}
		if (need_element) {
			if (curent.left !== null) {
				count_child += 1;
			}
			if (curent.right !== null) {
				count_child += 1;
			}
			if (curent !== this.root) {
				switch (count_child) {
					case 0:
							if (curent.data < parent.data) {
								parent.left = null;
							} else if (curent.data > parent.data) {
								parent.right = null;
							}
					break;
					case 1:
					if (curent.data < parent.data){
						if (curent.left === null) {
							parent.left = curent.right;
						} else {
							parent.left = curent.left;
						}
					}
					break;
					case 2:
					curent;
					var replacement = curent.left;
					var replacementParent = curent;

					while (replacement.right !== null) {
						replacementParent = replacement;
						replacement = replacement.right;
					}


					if (replacement.data === replacementParent.left.data) {
						curent.data = replacement.data;
						replacementParent.left = replacement.left;
					} else {
						replacementParent.right = null;
					}
				}
			} else {
				switch (count_child) {
					case 0:
							this.root = null;
					break;


				}
			}
		}
	}

	size() {
		var data = this.root;
		var count = 0;
		function look(data) {
			if (data) {
				if (data.left !== null) {
					count += 1;
					look(data.left);
				}
				if (data.right !== null) {
					count += 1;
					look(data.right);
				}
			}
			return count;
		}
		if (data !== null) {
			count += 1;
		}
		var a = look(data);
		return a;
	}



	isEmpty() {
		if (this.root === null) {
			return true;
		} else {
			return false;
		}
	}
}
