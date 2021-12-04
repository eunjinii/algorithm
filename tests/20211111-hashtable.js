function hashStringToInt(s, tableSize) {
  let hash = 17;

  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(3);
  numItems = 0;

  resize = () => {
    const newTable = new Array(this.table.length * 2);
    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStringToInt(key, newTable.length);
          if (newTable[idx]) {
            newTable[idx].push([key, value]);
          } else {
            newTable[idx] = [[key, value]];
          }
        });
      }
    });
    this.table = newTable;
  };

  setItem = (key, value) => {
    this.numItems++;

    const loadFactor = this.numItems / this.table.length;
    if (loadFactor >= 0.8) {
      this.resize();
    }

    const idx = hashStringToInt(key, this.table.length);
    if (this.table[idx]) {
      this.table[idx].push([key, value]);
    } else {
      this.table[idx] = [[key, value]];
    }
  };

  getItem = (key) => {
    const idx = hashStringToInt(key, this.table.length);
    if (!this.table[idx]) return null;

    // O(n)
    return this.table[idx].find((el) => el[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem('firstName', 'eunjin');
console.log(myTable.table.length);
myTable.setItem('lastName', 'lee');
console.log(myTable.table.length);
myTable.setItem('age', 29);
console.log(myTable.table.length);
myTable.setItem('birth', '2000-00-00');
console.log(myTable.table.length);

console.log(myTable.getItem('firstName'));
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('age'));
console.log(myTable.getItem('birth'));
