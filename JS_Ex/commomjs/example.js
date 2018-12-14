var x = 5;
var addX = function (value) {
  return value + x;
}

module.exports.x = x;
module.exports.addX = addX;
console.log('id:' +module.id);
console.log('filename:' +module.filename);
console.log('loaded:' +module.loaded);
console.log('exports:' + module.exports);