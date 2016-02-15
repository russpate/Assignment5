var questions = {
  askQuestion: function(content){
      return prompt(content);
  },
  startCharacter:"Choose your character to guide your tour: \n\na) Darth Vader \nb) Luke Skywalker \nc) Time Traveling Kylo Ren",
    vaderStart:"CONGRATS YOU PICKED DARTH VADER\n\n*!*~ksssshhhkrrrrr~*!*\n\nHey guuuuys sooo, I'm Darth and welcome to the Death Star.. Is everyone ready for a super awesome tour of my new 'moon-like' ship?\n\na) HECK YES I LOVE YOU DARTH\n\nb) Hold up I need to grab my favorite R2 Unit\n\nc) or naw?\n\n*!*~ksssshhhkrrrrr~*!*",
      vaderReady:"Dude, Kyle, You are way too excited...\n\n ok so how fast do you want your tour?\n\na) 50, b) 100, or c) plaid?",
      vaderHoldUp:"mmmmmk..\n\n what would you like to listen to while we wait?\n\na) jeopardy music\n\nb) titanic theme\n\nc) who let the dogs out",
      vaderNotReady:"Seriously?\n\na) Would you like to get off nicely?\n\nb) Be force thrown off?\n\nc) Or prance off like a dancing queen?",
    lukeStart:"**Luke spins around and flips his hood back**\n\nMan these tour ships are hard to steer with one hand.\n\n*crickets*\n\nMan this crowd is colder than a Ton-Ton's undercarriage on Hoth.\n\n What would you guys like to do next?\n\na) Hear another joke\n\nb) Continue the tour\n\nc) Stop the ride I get motion sickness",
      lukeJoke:"How many Jedi's does it take to change a light bulb?\n\na) Hear the answer\n\nb) Just stop\n\nc) Take a guess",
      lukeContinueTour:"OK, I can take a hint\n\nWhat would you like to see next?\n\na) Vader's Bedroom\n\nb) The trash compactor\n\nc) Cell Block 2187",
      lukeStop:"WoOoOoOoOoOA Nelly.. Looks like we're turning ths tugboat around.\n\nYou know the same thing happened to me on the Disney ride.\n\nWould you like to:\n\na) Walk back\n\nb) Be escorted by a protocol droid\n\nc) Be dragged back by a couple of stormtroopers",
    kyloStart:"AaAaAaAaAaAaAaAaaHHHHhHhHhhHhhhhHhhhhHhHhhhhHh\n\nI'm Kylo Ren and I figured out how to travel back in time and I'm so pissed about everything..\n\nCan anyone guess who my hero is?\n\na) Han Solo\n\nb) Hux\n\nc) Vader",
      kyloShipName:"DUUUUUUDE NOOOOOOOO I SERIOUSLY HATE THAT GUY.\n\nHE IS THE WORST\n\nDo you even know what his piece of crap ship is named?\n\na) Milennium Falcon\n\nb) USS Enterprise\n\nc) Protector",
      kyloSearchVader:"Naw but that dude is totally my best friend.\n\nI mean we fight sometimes but thats what best friends do.\n\nDo you guys want to help me look around for vader?\n\na) yes, b) no, or c) maybe?",
      kyloLove:"HELL YES I FRICKIN' LOVE THAT DUDE I MEAN WHAT'S NOT TO LOVE.\n\nWhat do you love about him?\n\na) The way he dress in all black like a badass\n\nb) The kickass KRSCHKOUGH sound his ventilator makes\n\nc) I don't love anything about him",
  wantMore:"Wow Guys, its been real and its been fun but it hasn't been real fun. We need some time to go adjust our motivators.\n\nUnless, you want to take another tour right now?\n\na) Yes or b) No?",
};


var answer = questions.askQuestion (questions.startCharacter);
