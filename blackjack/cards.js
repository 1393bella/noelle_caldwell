$(document).ready(function(){
class Card {
  constructor(val, suit) {
    this.value = val;
    this.suit = suit;
    if (val > 1 && val <= 10) {
      this.name = `${val}`;
      this.img = `${this.suit[0].toLowerCase()}${val}.png`;
    }
    else if (val == 1) {
      this.name = "Ace";
      this.img = `${this.suit[0].toLowerCase()}${val}.png`;
    }
    else if (val == 11) {
      this.name = "Jack";
      this.img = `${this.suit[0].toLowerCase()}j.png`;
    }
    else if (val == 12) {
      this.name = "Queen";
      this.img = `${this.suit[0].toLowerCase()}q.png`;
    }
    else if (val == 13) {
      this.name = "King";
      this.img = `${this.suit[0].toLowerCase()}k.png`;
    }
    this.name += ` of ${suit}`;
  }

  toString() {
    return this.name;
  }
}
class Deck {
  constructor() {
    this.AllCards = [];
    this.setDeck();
  }

  setDeck() {
    var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 1; j < 14; j++) {
        this.AllCards.push(new Card(j, suits[i]));
      }
    }
  }

  shuffle() {
    for (let i = 0; i < this.AllCards.length; i++) {
      let swap = Math.floor(Math.random()*(this.AllCards.length));
      let temp = this.AllCards[i];
      this.AllCards[i] = this.AllCards[swap];
      this.AllCards[swap] = temp;
    }
  }

  deal() {
    let dealt = this.AllCards[this.AllCards.length-1];
    this.AllCards.pop();
    return dealt;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }

  discard(card) {
    let discardIdx = this.hand.find(card);
    this.hand.splice(discardIdx, 1);
  }

  getHandValue() {
    let total = 0;
    let numAces = 0;
    for (let i = 0; i < this.hand.length; i++) {
      if (this.hand[i].value == 1) {
        numAces++;
        continue;
      }
      if (this.hand[i].value > 10) {
        total += 10;
      }
      else {
        total += this.hand[i].value;
      }
    }

    //add in aces
    if (numAces > 0 ) {
      if ((total + (11 + numAces - 1)) > 21) {
          total += numAces;
      }
      else {
        total += 11 + numAces - 1;
      }
    }

    return total;
  }
}

class Dealer extends Player {
  constructor(name) {
    super(name);
  }
}

  var name = prompt("Please enter your name:");
  var deck = new Deck();
  deck.shuffle();
  var player = new Player("Noelle");
  var dealer = new Dealer();
  document.getElementById("playername").innerHTML = player.name + "'s Cards:";
  player.hand.push(deck.deal());
  dealer.hand.push(deck.deal());
  player.hand.push(deck.deal());
  dealer.hand.push(deck.deal());

  //show dealer's second card
  let dimg = document.createElement("img");
  dimg.src = "cards-png/" + dealer.hand[1].img;
  document.getElementById("dealer").appendChild(dimg);
  //show player's hand
  for (let c in player.hand) {
    let img = document.createElement("img");
    img.src = "cards-png/" + player.hand[c].img;
    document.getElementById("player").appendChild(img);
    document.getElementById("pscore").innerHTML = player.getHandValue();
  }

  //if player chooses to hit, show new card and update total
  $('#hit').click(function() {
    player.hand.push(deck.deal());
    let img = document.createElement("img");
    img.src = "cards-png/" + player.hand[player.hand.length-1].img;
    document.getElementById("player").appendChild(img);
    document.getElementById("pscore").innerHTML = "Score: " + player.getHandValue();
    if (player.getHandValue() > 21) {
      alert("Bust! Dealer wins.");
      document.getElementById("options").innerHTML = "<button id=\"restart\">Restart</button>";
    }
  });

  $('#stay').click(function() {
    while (dealer.getHandValue() < 17) {
      dealer.hand.push(deck.deal());
      let dimg = document.createElement("img");
      dimg.src = "cards-png/" + dealer.hand[dealer.hand.length-1].img;
      document.getElementById("dealer").appendChild(dimg);
    }
    document.getElementById("dscore").innerHTML = "Score: " + dealer.getHandValue();
    document.getElementById("hiddencard").src = "cards-png/" + dealer.hand[0].img;

    if (dealer.getHandValue() > player.getHandValue() && dealer.getHandValue() < 22) {
      alert("Dealer wins!");
    }
    else {
      alert("Player wins!");
    }
    document.getElementById("options").innerHTML = "<button id=\"restart\">Restart</button>";
  })

  $(document).on('click', '#restart', function() {
      location.reload();
  })

})
