/**
 * @global
 * @typedef {Object} EqualityComparer
 * @property {function(any, any):boolean} equals Method for checking two objects equality.
 * @property {function(any):number} getHashCode Method for calculating object hashcode.
 */

/**
 * @class
 */
class HashSet {
  /**
   * Create a HashSet.
   * @param {EqualityComparer} equalityComparer Comparer for an elements of the set.
   */
  constructor(equalityComparer) {
    this._equalityComparer = equalityComparer;
    this._data = new Map();
    this._size = 0;
  }

  /**
   * Property returns the number of elements in the set.
   * @returns {number} Number of elements in the set.
   */
  get size() {
    return this._size;
  }

  /**
   * Method appends a new element to the set.
   * @param value New element value.
   * @returns {HashSet} The HashSet object.
   */
  add(value) {
    const hashCode = this._equalityComparer.getHashCode(value);
    let bucket = this._data.get(hashCode);
    if (!bucket) {
      bucket = [];
      this._data.set(hashCode, bucket);
    }

    if (bucket.some(x => this._equalityComparer.equals(x, value)) === false) {
      bucket.push(value);
      this._size++;
    }
    return this;
  }

  /**
   * Method checks element existence in the set.
   * @param value Element value.
   * @returns {boolean} Element existence in the set.
   */
  has(value) {
    const bucket = this._data.get(this._equalityComparer.getHashCode(value));
    if (!bucket) return false;

    return bucket.some(x => this._equalityComparer.equals(x, value));
  }

  /**
   * Method removes element from the set.
   * @param value Element value.
   * @returns {boolean} true if an element in the set has been removed successfully; otherwise false.
   */
  delete(value) {
    const bucket = this._data.get(this._equalityComparer.getHashCode(value));
    if (!bucket) return false;

    for (var i = 0; i < bucket.length && this._equalityComparer.equals(bucket[i], value) === false; i++);
    if (i === bucket.length) return false;

    bucket.splice(i, 1);
    this._size--;
    return true;
  }

  /**
   * Method removes all elements from the set.
   * @returns {undefined}
   */
  clear() {
    this._data.clear();
    this._size = 0;
  }

  /**
   * @callback foreachCallback
   * @memberof HashSet
   * @param value1 The value of the element in the set.
   * @param value2 The value of the element in the set.
   * @param set The HashSet object that's being traversed.
   * @returns {undefined}
   */

  /**
   * Method executes a provided function onece for each element in the set.
   * @param {foreachCallback} callback The function executing for each element.
   * @returns {undefined}
   */
  forEach(callback) {
    this._data.forEach(bucket => bucket.forEach(value => callback(value, value, this)));
  }

  *_iterateElements(selector) {
    for (const bucket of this._data.values()) {
      for (const value of bucket) {
        yield selector(value);
      }
    }
  }

  /**
   * Method returns a new Iterator contains an array of [value, value] for each element of the set.
   * @returns {Iterable<any>} A new Iterator contains an array of [value, value] for each element of the set.
   */
  entries() {
    return this._iterateElements(value => [value, value]);
  }

  /**
   * Method returns a new Iterator contains values for each element of the set.
   * @returns {Iterable<any>} A new Iterator contains values for each element of the set.
   */
  values() {
    return this._iterateElements(value => value);
  }

  /**
   * Method returns a new Iterator contains values for each element of the set.
   * @returns {Iterable<any>} A new Iterator contains values for each element of the set.
   */
  [Symbol.iterator]() {
    return this._iterateElements(value => value);
  }
}

module.exports = HashSet;
