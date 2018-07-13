console.log('Lists')
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.append = append;
  this.remove = remove;
  this.find = find;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.contains = contains;
  this.length = length;
  //functions below allow traversing this list
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
}

function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize-1;
}

function prev() {
  if (this.pos > -1) {
    --this.pos;
  }
}

function next() {
  if (this.pos < this.listSize) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}

function length() {
  return this.listSize;
}

function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
        return true;
      }
  }
  return false;
}

function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

//not working fix later
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos+1, 0, element);
    console.log(this.dataStore)
      ++this.listSize;
      return true;
  }
    return false;
}

function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] == element) {
      return i;
    }
  }
  return -i;
}

function length() {
  return this.listSize;
}

function toString(){
  return this.dataStore
}

function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize + 1;
    return true;
  }
  return false;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

var names = new List();
names.append("Bob");
names.append("Alice");
names.append("Mallory");
console.log(names.dataStore);
//iterating through list forward
for(names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}
//iterating through list backward
for(names.end(); names.currPos() > -1; names.prev()) {
  console.log(names.getElement());
}
// original (5) ["Frank", "Alice", "Mallory", "Bob", "Bernadette"]
// var firstSlice = names.dataStore.splice(1, 3)
// original (2) ["Frank", "Bernadette"]
// firstSlice (3) ["Alice", "Mallory", "Bob"]
// original #2 (5) ["Bernadette", "Bob", "Mallory", "Alice", "Frank"]
// firstSlice = splice (2, 1) ["Mallory"]
// original #2  (4) ["Bernadette", "Bob", "Alice", "Frank"]
// secondSlice = splice (2, 2) (2) ["Alice", "Frank"]
// original #2 (2) ["Bernadette", "Bob"]
// original #3 (5) ["Frank", "Alice", "Mallory", "Bob", "Bernadette"]
// firstSlice names.dataStore.splice(3, 1) ["Bob"]
// original #3 (4) ["Frank", "Alice", "Mallory", "Bernadette"]
// secondSlice  names.dataStore.splice(0, 3) (3) ["Frank", "Alice", "Mallory"]
// original #3 ["Bernadette"]
