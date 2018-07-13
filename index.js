console.log('Lists')
function List() {
  this.listSize = 0;
  this.dataStore = [];
  this.append = append;
  this.remove = remove;
  this.find = find;
}

function find(element) {

}

function append(element) {
  this.dataStore[this.listSize++] = element;
}
