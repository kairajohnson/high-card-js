function card(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

function deck(){
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push(this.names[n] + " " + this.suits[s]);
        }
     }
    return cards;
}

var myDeck = new deck();



function hands (playerHand) {
var playerNumber = prompt("how many players?");
var playerHand = myDeck.length / playerNumber;
var hand = []
for (i = 0; i < myDeck.length; i += playerHand){
  hand.push(myDeck.slice(i, i + playerHand));
}
return hand;
}

// var index         = Math.floor(Math.random() *  myDeck.length);
// var shuffle       = myDeck[index];
//
// for (i = 0; i <= 52; i ++) {
//   shuffle;

// }
console.log(hands());
console.log(myDeck);
