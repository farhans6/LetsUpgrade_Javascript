var a = `26`;
console.log(a);

var str = `afs`;
console.log(str);

// Methods in Strings and Array.
// 1.concat()

var str = `abc`;
var str2 = `def`;
var fstr = str.concat(str2);
console.log(fstr);

// copyWithin()

var books = [`English`, `Maths`, `Science`, `Social`, `Arts`, `Chemistry`, `Physics`, `Biology`];
books.copyWithin(5,0,2);
console.log(books);

// push()

books.push(`Economics`);
console.log(books);

// unshift()

books.unshift(`Geography`);
console.log(books);

// valueOf()
var b = books.valueOf();
console.log(b);

// indexOf()
var i = books.indexOf(`Economics`);
console.log(i);

//  includes()
var n = books.includes("English");
console.log(n);


// Additiinal Question

// confirm
var res;
confirm(`Are you 21+ of age?`);

