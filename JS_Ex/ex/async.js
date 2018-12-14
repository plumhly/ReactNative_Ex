var result = async function(x) {
  var y =  await x + 2;
  var z = await y + 1
  // console.log(y,);
  return z;
}

var s = result(2) //Promise
s.then((value) => {
  console.log(value)
});

