var _ = require('lodash');

var c1 = _.chunk(['a' , 'b' , 'c' , 'd'],2);

console.log('c1=', c1)

var c2 = _.chunk(['a' , 'b' , 'c' , 'd'],3);

console.log('c2=', c2)