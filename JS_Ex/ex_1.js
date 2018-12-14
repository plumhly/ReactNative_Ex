// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// var removed = myFish.splice(2,0,'dum');
// console.log(removed);

// var [a, , b] = [1,2,3];
// console.log();
var a = [
    {
        "name":"li",
        "age":10
    },
    {
        "name":"ni",
        "age":10
    }
];

for (ex in a) {
    var b = a[ex];
    console.log(ex);
    console.log(b);
}