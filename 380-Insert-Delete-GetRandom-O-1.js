
var RandomizedSet = function () {
  this.indexMap = {};
  this.numsList = [];
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function (val) {
  const res = !(val in this.indexMap);
  if (res) {
    this.indexMap[val] = this.numsList.length;
    this.numsList.push(val);
  }
  return res;
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function (val) {
  const res = val in this.indexMap;
  if (res) {
    const i = this.indexMap[val];
    const lastNum = this.numsList[this.numsList.length - 1];
    this.numsList[i] = lastNum;
    this.numsList.pop();
    this.indexMap[lastNum] = i;
    delete this.indexMap[val];
  }
  return res;
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.numsList.length);
  return this.numsList[randomIndex];
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/