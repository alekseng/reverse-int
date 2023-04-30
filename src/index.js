module.exports = function reverse (n) {
    if (Math.sign(n) == '1') {
       return n.toString().split('').reverse().join('')
    } else if (Math.sign(n) == '-1') {
       return n.toString().split('').reverse().join('').slice(0, -1)
    }
}
