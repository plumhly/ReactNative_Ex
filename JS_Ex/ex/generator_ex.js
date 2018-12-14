function *gener(x) {
  var y = yield x + 2;
  var z = yield y + 1;
  console.log(z);
  return z;
}

var s = gener(1);
console.log(s.next())
console.log(s.next(3))
console.log(s.next())