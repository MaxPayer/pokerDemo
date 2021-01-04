const Poker = require("./poker");

module.exports = {

  sortRandom: function(arr){
    arr.sort(function(a, b){
      return Math.random() - 0.5;
    })
  },

  print: function(part){
    let str = '';
    for(let i = 0; i < part.length; i ++){
      let p = part[i];
      // console.log(Poker.toString(p) + '  ');
      str += p.toString() + "  ";
    }
    console.log(str);
  }


}