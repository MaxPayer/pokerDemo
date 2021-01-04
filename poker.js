function Poker(color, number){
  this.color = color;
  this.number = number;
}

Poker.prototype.toString = function(){
  let str = '';
  if(this.color == 1){
    str = '红桃'
  }else if(this.color == 2){
    str = '黑桃'
  }else if(this.color == 3){
    str = '梅花'
  }else if(this.color == 4){
    str = '方框'
  }

  if(this.number >= 2 && this.number <= 10){
    str += this.number
  }else if(this.number == 14 ){
    str = 'joker'
  }else if(this.number == 15 ){
    str = 'JOKER'
  }else if(this.number == 11 ){
    str += 'J'
  }else if(this.number == 12 ){
    str += 'Q'
  }else if(this.number == 13 ){
    str += 'K'
  }else if(this.number == 1 ){
    str += 'A'
  }

  return str;
}


module.exports = Poker;