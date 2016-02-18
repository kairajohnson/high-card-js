var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];

var deck =[];








var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    values.foreach(function(value) {suits.forEach(function(suit){
      game.deck.push (value + " " + suit)
    });

  },
  shuffleDeck: function(){

  },
  getMorePlayers: function(){

  },
  deal: function(){

  },
  findHighestCard: function(){

  },
  announceWinners: function(){

  },
  playANewGame: function(){

  }
}
