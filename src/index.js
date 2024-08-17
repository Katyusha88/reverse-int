module.exports = function reverse (n) {
   const resolt = n.toString().split('').reverse().join('');
   return parseInt(resolt) ;
}
