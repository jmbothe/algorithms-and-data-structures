class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinaryTree(value);
      }
    } else if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BinaryTree(value);
      }
    }
    return this;
  }

  contains(value) {
    if (this.value === value) return true;

    if (value < this.value) {
      return this.left && this.left.contains(value);
    } else if (value > this.value) {
      return this.right && this.right.contains(value);
    }
    return false;
  }

  traverseInOrder(process) {
    if (this.left) {
      this.left.traverseInOrder(process);
    }
    process(this.value);
    if (this.right) {
      this.right.traverseInOrder(process);
    }
    return this;
  }

  getMinimum() {
    return this.left
      ? this.left.getMinimum()
      : this.value;
  }

  delete(value) {
    if (this.value === value) {
      if (this.left && this.right) {
        const newValue = this.left.getMinimum();
        this.value = newValue;
        this.left = this.left.delete(newValue);
        return this;
      }
      return this.left || this.right || null;
    } else if (value < this.value && this.left) {
      this.left = this.left.delete(value);
    } else if (value > this.value && this.right) {
      this.right = this.right.delete(value);
    }
    return this;
  }
}

module.exports = BinaryTree;
