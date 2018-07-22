//Stacks
console.log('Stacks')
function Stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

function push(element){
  this.dataStore[this.top++] = element;
}
//more research in incrementation before or after element
function pop(){
  return this.dataStore[--this.top];
}

function peek(){
  return this.dataStore[this.top-1];
}

function length(){
  return this.top;
}

function clear(){
  this.top = 0;
}
//convert a number from one base to another base
//this algorithm will only work with bases 2 through 9
//research the purpose of converting number to base
function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor(num /= base)
  } while (num > 0);
  var converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

//Palindromes
function isPalindrome(word){
  var s = new Stack();
  for (var i = 0; i < word.length; ++i){
    s.push(word[i]);
  }
  var rWord = "";
  while (s.length() > 0){
    rWord += s.pop();
  }
  if (word == rWord) {
    return true;
  } else {
    return false;
  }
}
