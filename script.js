var values  = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits   = ["Clubs", "Diamonds", "Hearts", "Spades"];
var game = {
  deck: [],
  players: [],
  hands: [],
  buildDeck: function(){
    var self    = this;
    values.forEach(function(value){
      suits.forEach(function(suit){
        self.deck.push([value, suit]);
      });
    });
  },
  shuffleDeck: function(){
    this.deck.sort(function(){
      if(Math.random() > 0.5) return 1;
      else return -1;
    });
  },
  getMorePlayers: function(){
    var playerName = prompt(this.players.length + " player(s) so far. Enter a player name, or click 'cancel' to play.");
    if(playerName){
      this.players.push(playerName);
      this.getMorePlayers();
    }
  },
  deal: function(){
    var self = this;
    var announcement = "";
    self.players.forEach(function(player){
      var card = self.deck.pop();
      announcement += player + " has the " + card[0] + " of " + card[1] + "!\n";
      self.hands.push({player: player, value: card[0], suit: card[1]});
    });
    alert(announcement);
  },
  findHighestCard: function(){
    var self  = this;
    self.hands.sort(function(a, b){
      if(values.indexOf(a.value) > values.indexOf(b.value)) return -1;
      else return 1;
    });
  },
  announceWinners: function(){
    var self = this;
    var announcement = "";
    self.hands.forEach(function(hand, place){
      announcement += hand.player + " is number " + (place + 1) + " with the " + hand.value + " of " + hand.suit + "!\n";
    });
    alert(announcement);
  },
  playANewGame: function(){
    var self = this;
    self.buildDeck();
    self.shuffleDeck();
    self.getMorePlayers();
    self.deal();
    self.findHighestCard();
    self.announceWinners();
  }
}
game.playANewGame();
