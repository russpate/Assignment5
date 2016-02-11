//
//
// This is ** Welcome to the Death Star!** a demo game for learning the basics of javascript
//
//
//

console.log("Welcome to the Death Star!");
//
//
alert("Hello and Welcome to the Death Star!!!!!!!!\n\nThe most incredible feat in the universe since saber sliced bread! \n\n(click ok to continue)");
//
//
//Scenario 1: Question -- Character Choice
//
var answer = prompt ("Choose your character to guide your tour: \n\nA. Darth Vader \nB. Luke Skywalker \nC. Time Traveling Kylo Ren");
        //
        //Scenario 1: Choice 1 -- Darth Vader
        //
        if(answer === "A" || answer === "Darth Vader" || answer === "A. Darth Vader" || answer === "a"){
          console.log("recap: *!*~ksssshhhkrrrrr~*!*\nWelcome to the Dark Side of the force!\n*!*~ksssshhhkrrrrr~*!*");
                  //
                  //Scenario 1.1: Question -- Are you ready?
                  //
                  var answer = prompt ("CONGRATS YOU PICKED DARTH VADER\n\n*!*~ksssshhhkrrrrr~*!*\n\nHey guuuuys sooo, I'm Darth and welcome to the Death Star.. Is everyone ready for a super awesome tour of my new 'moon-like' ship?\n\n- HECK YES I LOVE YOU DARTH\n\n- Hold up I need to grab my favorite R2 Unit\n\n- or naw?\n\n*!*~ksssshhhkrrrrr~*!*");
                            //
                            // Scenario 1.1: Choice 1 -- Heck Yes
                            //
                            if(answer === "Heck Yes" || answer === "HECK YES" || answer === "heck yes" || answer === "yes" || answer === "Yes" || answer === "sure" || answer === "yep" || answer === "si" || answer === "Heck Yes I love You Darth" || answer === "HECK YES I LOVE YOU DARTH"){
                              console.log("recap: so you've picked Darth Vader as your tour guide and you are just a little too excited.. he seems suspicious that you look a little too familiar");
                                //
                                //Scenario 1.1.1: Question 1 -- what speed?
                                //
                                var answer = prompt ("Dude, Kyle, You are way too excited...\n\n ok so how fast do you want your tour?\n\n50, 100, or plaid?");
                                          //
                                          // Scenario 1.1.1: Choice 1 -- 50
                                          //
                                          if(answer === "50"){
                                            console.log("recap: You've chosen Darth Vader, You're 'really' ready to go, and now we will begin your tour at"+ answer + " !");

                                            alert("Buckle Up\n\nCommencing Tour in\n\n-3 \n\n-2 \n\n-1\n\n;laisdf;lasndf;ashdfaksjdnfasjdhfSmallSecretHoleAsBigAsAWompRatThatCanDestroyEverythingasldfslasdhf;ajsdhflkasdhflkasjdhflkjsadhf\n\n(click ok to continue)");

                                            endGame();
                                          //
                                          // Scenario 1.1.2: Choice  2 -- 100
                                          //
                                          } else if (answer === "100"){
                                                console.log("recap: You've chosen Darth Vader, You're 'really' ready to go, and now we will begin your tour at"+ answer + " !");

                                                alert("Buckle Up\n\nCommencing Tour in\n\n-3 \n\n-2 \n\n-1\n\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-dnfasasfasdfasdfasdfjdhfSmallSecretHoleAsBigAsAWompRatThatCanDestroyEverythingasasdfasdfasdfasdfldfsl=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n\n(click ok to continue)");

                                                endGame();

                                          //
                                          // Scenario 1.1.3: Choice 3 -- plaid
                                          //
                                          } else if (answer ==="plaid"){
                                                console.log("recap: You've chosen Darth Vader, You're 'really' ready to go, and now we will begin your tour at "+ answer + " !");

                                                alert("Buckle Up\n\nCommencing Tour in\n\n-3 \n\n-2 \n\n-1\n\n;######################################################################################################################################################################################################################################################################################################dnfasasfasdfasdfasdfjdhfSmallSecretHoleAsBigAsAWompRatThatCanDestroyEverythingasasdfasdfasdfasdfldfsl######################################################################################################################################################################################################################################################################################################\n\n(click ok to continue)");

                                                endGame();

                                            //
                                            // Scenario 1.1.4: Choice -- Vaccuum of Space
                                            //
                                            } else {
                                              console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                                              newTour();
                                            }

                            //
                            // Scenario 1.2: Choice 2 -- Hold Up
                            //
                            } else if(answer === "Hold up I need to grab my favorite r2-unit" || answer === "Hold up I need to grab something" || answer === "wait" || answer === "uno momento" || answer === "HOLD UP" || answer === "Hold up" || answer === "hold up") {
                                //
                                //Scenario 1.2.1: Question 1 -- Waiting Music
                                //
                                var answer = prompt ("mmmmmk..\n\n what would you like to listen to while we wait?\n\n- jeopardy music\n\n- titanic theme\n\n- who let the dogs out");
                                          //
                                          // Scenario 1.2.1: Choice 1 -- Jeopardy
                                          //
                                          if(answer === "jeopardy music"){
                                            console.log("recap: Du Nu Nu Nuuuu Nu Nu Nuuuuuu Du Nu Nu Nu NU nu NuNUNuNU nu Nu NU nu Nu Nu nU Nu nununununu");
                                            window.open('https://www.youtube.com/watch?v=rTyN-vvFIkE');
                                          //
                                          // Scenario 1.2.2: Choice  2 -- Titanic
                                          //
                                          } else if (answer === "titatic theme"){
                                                console.log("recap: ");
                                                window.open('https://www.youtube.com/watch?v=rTyN-vvFIkE');
                                          //
                                          // Scenario 1.2.3: Choice 3 -- Who let the dogs out
                                          //
                                          } else if (answer ==="who let the dogs out"){
                                                console.log("recap: ");
                                                window.open('https://www.youtube.com/watch?v=lYs96lpSTw4');

                                          //
                                          // Scenario 1.2.4: Choice -- Vaccuum of Space
                                          //
                                          } else {
                                            console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                                            newTour();
                                          }
                            //
                            // Scenario 1.3: Choice 3 -- Naw
                            //
                            } else if (answer === "naw") {

                                //
                                //Scenario 1.3.1: Question 1 -- Exit
                                //
                                var answer = prompt ("Seriously?\n\n- Would you like to get off nicely?\n\n- Be force thrown off?\n\n- Or prance off like a dancing queen?");

                                          //
                                          // Scenario 1.3.1: Choice 1 -- Nicely
                                          //
                                          if( answer === "I would like to get off nicely"|| answer === "Get off nicely" || answer === "Get off" || answer === "get off"){
                                            console.log("recap: Sooo.. you chose" + answer + " but Vader can be a bit of a hot head. He force threw you off anyways. Bye Felicia");

                                            alert("YIKES, it looks like you chose" + answer + " but Vader force threw you off anyways. Bye Felicia");

                                            endGame();

                                          //
                                          // Scenario 1.3.2: Choice  2 -- Force Thrown
                                          //
                                          } else if (answer === "Be force thrown off" || answer === "force thrown" || answer === "force"){
                                                  console.log("recap: Yeeeeah... I think this was Vader's preferred method anyways. Bye Felicia");

                                                  alert("HA! It was inevitable you can't waste Vader's time and expect it to go any other way so it was probably smart to except your fate.");

                                                  endGame();
                                          //
                                          // Scenario 1.3.3: Choice 3 -- Prance
                                          //
                                          } else if (answer ==="Prance off like a dancing queen" || answer === "prance off" || answer === "prance"){
                                                console.log("recap: Sooo.. you chose" + answer + " but Vader can be a bit of a hot head. He force threw you off anyways. Bye Felicia");

                                                alert("YIKES, it looks like you chose" + answer + " but Vader force threw you off anyways. Bye Felicia");

                                                endGame();

                                          //
                                          // Scenario 1.3.4: Choice -- Vaccuum of Space
                                          //
                                          } else {
                                            console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                                            newTour();
                                          }
                            //
                            // Scenario 1.4: Choice 4 -- Vacuum of Space
                            //
                            } else {
                              console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                              newTour();
                            }
            }
        //
        //Scenario 1: Choice 2 -- Luke Skywalker
        //
        else if(answer === "B" || answer === "b" || answer === "B. Luke Skywalker" || answer === "b. Luke Skywalker" || answer === "Luke Skywalker" || answer === "luke skywalker" || answer === "luke" || answer === "Luke"){
          console.log("recap: Oh no.. This tour unit's got a bad motivator!\n\n juuuust kidding.\n\n You've picked our last hope for this tour, but wait there is another.");
                  //
                  //Scenario 1.1: Question -- Next
                  //
                  var answer = prompt ("**Luke spins around and flips his hood back**\n\nMan these tour ships are hard to steer with one hand.\n\n*crickets*\n\nMan this crowd is colder than a Ton-Ton's undercarriage on Hoth.\n\n What would you guys like to do next?\n\n- Hear another joke\n\n- Continue the tour\n\n- Stop the ride I get motion sickness");
                            //
                            // Scenario 1.1: Choice 1 -- Joke
                            //
                            if(answer === "Hear Another Joke" || answer === "joke"){
                              console.log("recap: eeeeh.. Goodluck Luke is notoriously bad at telling jokes");
                                //
                                //Scenario 1.1.1: Question 1 -- How Many Jedi's
                                //
                                var answer = prompt ("How many Jedi's does it take to change a light bulb?\n\n- Hear the answer\n\n- Just stop\n\n- Take a guess");
                                          //
                                          // Scenario 1.1.1: Choice 1 -- Hear
                                          //
                                          if(answer === "Hear the answer"){
                                            console.log("recap: ****** price is right fail horn plays ******");

                                            alert("JUST OBI-WAN.. BAHAHAHAHAHAHAHAH\n\nWell it looks like that's all the time we have for our tour. Thanks for riding aboard the Skywalker Express and I'll seeya next time.");

                                            endGame();
                                          //
                                          // Scenario 1.1.2: Choice  2 -- Stop
                                          //
                                          } else if (answer === "Just Stop" || answer === "just stop" || answer === "stop"){
                                                console.log("recap: well.. probably a smart choice but not knowing the punchline is gonna be worse than not knowing who your father is.");

                                                alert("Well.. Fine.\n\nOur last stop is the trash compactor\n\nGood luck getting out of here without your trusty R2 Unit");

                                                endGame();
                                          //
                                          // Scenario 1.1.3: Choice 3 -- Guess
                                          //
                                          } else if (answer ==="Take a guess" || answer === "Guess" || answer === "guess"){
                                                console.log("recap: OOOH.. Luke likes an intristed crowd!");

                                                var guess = prompt("Take your best guess!");

                                                if (guess === "just obi-wan" || guess === "obi-wan"){
                                                  alert("HAHAHA GREAT GUESS! That's a good one right?\n\nWell it looks like that's all the time we have for our tour. Thanks for riding aboard the Skywalker Express and I'll seeya next time.");
                                                } else {
                                                  alert("Well that was a pretty good guessn\n\nbut the answer is.....\n\ndrum roll please\n\nJUST OBI-WAN\n\nBAHAHAHAHAHA\n\nWell it looks like that's all the time we have for our tour. Thanks for riding aboard the Skywalker Express and I'll seeya next time.");
                                                }

                                                endGame();

                                          //
                                          // Scenario 1.1.4: Choice -- Vaccuum of Space
                                          //
                                          } else {
                                            console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                                            newTour();
                                          }

                            //
                            // Scenario 1.2: Choice 2 --
                            //
                          } else if(answer === "Continue the tour" || answer === "continue") {
                                //
                                //Scenario 1.2.1: Question 1 --
                                //
                                  var answer = prompt ("OK, I can take a hint\n\nWhat would you like to see next?\n\n- Vader's Bedroom\n\n- The trash compactor\n\n- Cell Block 2187");
                                          //
                                          // Scenario 1.2.1: Choice 1 --
                                          //
                                          if(answer === "Vader's Bedroom" || answer === "vader's bedroom" || answer === "vaders bedroom" || answer === "vaders room"){
                                            console.log("recap: yaaaay we get to go see my dad's.. errr.. vader's room!");

                                            alert("I've got a bad feeling about this...\n\n****shhhwoop**** The door to vader's room opens.\n\n*!*~ksssshhhkrrrrr~*!*\n\nLooks like vader is out(thank goodness) and his room is a mess.\n\nAs you can see here is where he sits in his bean bag chair and skypes with Palpatine, over here is where he looks out his window at space, and over here I think he sleeps in this wierd ball thing.\n\nWell it looks like that's all the time we have for our tour. Thanks for riding aboard the Skywalker Express and I'll seeya next time.");

                                            endGame();
                                          //
                                          // Scenario 1.2.2: Choice  2 --
                                          //
                                          } else if (answer === "The trash compactor" || answer === "trash"){
                                                console.log("recap: ");

                                                alert("YUCK\n\nWhat an aweful idea.. \n\nThere's some weird worm octupus monster thing that lives down there and I'd rather not have to deal with it again.\n\n Actually, that brings up a lot of memories I think I'm gonna go cry to my sister. Maybe try taking another tour tomorrow.");

                                                endGame();
                                          //
                                          // Scenario 1.2.3: Choice 3 --
                                          //
                                        } else if (answer ==="Cell Block 2187" || answer === "cell block 2187" || answer === "cell block" || answer === "cell"){
                                            console.log("recap: nice choice, transporting a prisoner?");

                                            alert("ooooh you like a little intrigue eh?\n\nNeed a little msytery and drama in your life?\n\nWell this is where they held my sister for allegedly being part of the rebel alliance and a traitor.\n\nMy sister can be mean sometimes, she called me short when I rescued her.\n\nAnyways, over there is the chute to the trash compactor.\n\nWell it looks like that's all the time we have for our tour. Thanks for riding aboard the Skywalker Express and I'll seeya next time.");

                                            endGame();
                                          //
                                          // Scenario 1.2.4: Choice -- Vaccuum of Space
                                          //
                                          } else {
                                            console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                                            newTour();
                                          }
                            //
                            // Scenario 1.3: Choice 3 --
                            //
                          } else if (answer === "Stop the ride I get motion sickness" || answer === "Stop the ride" || answer === "stop the ride" || answer === "STOP" || answer === "Stop" || answer === "stop") {

                                //
                                //Scenario 1.3.1: Question 1 --
                                //
                                  var answer = prompt ("WoOoOoOoOoOA Nelly.. Looks like we're turning ths tugboat around.\n\nYou know the same thing happened to me on the Disney ride.\n\nWould you like to:\n\n- Walk back\n\n- Be escorted by a protocol droid\n\n- Be dragged back by a couple of stormtroopers");

                                          //
                                          // Scenario 1.3.1: Choice 1 --
                                          //
                                            if(answer === "Walk back"){
                                              console.log("recap: Oh nice well I'm glad you are well enough to walk!");

                                              alert("A little fresh air is always good\n\nOh and watch out for those little MSE-6 Droids those little buggers will take your feet right out from under you if you aren't careful.\n\nAdios.");

                                              endGame();
                                          //
                                          // Scenario 1.3.2: Choice  2 --
                                          //
                                        } else if (answer === "Be escorted by a protocol droid" || answer === "Escorted" || answer === "escorted"){
                                                console.log("recap: Meet my good friend c3po he's a little slow but he will definitely get you there.");

                                                alert("~*~*~*~ Beep Boop Beep Boop ~*~*~*~\n\nWell hello Masta Luke and I'd be most delighted to escort your guest.\n\nFollow me right this way.");

                                                endGame();
                                            //
                                            // Scenario 1.3.3: Choice 3 --
                                            //
                                          } else if (answer ==="Be dragged back by a couple of stormtroopers" || answer === "stormtroopers" || answer === "dragged" || answer === "drag"){
                                                console.log("recap: Have it your way, guys! Take them away.");

                                                alert("Clunk Clunk Clunk Clunk\n\nAlright, move along\n\nLet's go.\n\nClunk Clunk Clunk Clunk");

                                                endGame();

                                            //
                                            // Scenario 1.3.4: Choice -- Vaccuum of Space
                                            //
                                          } else {
                                            console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                                            newTour();
                                          }
                            //
                            // Scenario 1.4: Choice 4 -- Vacuum of Space
                            //
                            } else {
                              console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                              newTour();
                            }
            }
        //
        //Scenario 1: Choice 3 -- Time Traveling Kylo Ren
        //
        else if(answer === "C" || answer === "c" || answer === "C. Time Traveling Kylo Ren" || answer === "C. Kylo Ren" || answer === "Kylo Ren" || answer === "kylo ren"){
          console.log("recap: Kylo Ren time traveled here so he could meet his supposed 'hero' Darth Vader so he can like finished what he started or whatever. He's also like, the angriest dude in the galaxy\n\nso watch out.");
                  //
                  //Scenario 3.1: Question --
                  //
                  var answer = prompt ("AaAaAaAaAaAaAaAaaHHHHhHhHhhHhhhhHhhhhHhHhhhhHh\n\nI'm Kylo Ren and I figured out how to travel back in time and I'm so pissed about everything..\n\nCan anyone guess who my hero is?\n\n- Han Solo\n\n- Hux\n\n- Vader");
                            //
                            // Scenario 3.1: Choice 1 --
                            //
                            if(answer === "Han Solo" || answer === "Han" || answer === "han"){
                              console.log("recap: OOOOOOOOH BAD CHOICE.");
                                //
                                //Scenario 3.1.1: Question 1 --
                                //
                                  var answer = prompt ("DUUUUUUDE NOOOOOOOO I SERIOUSLY HATE THAT GUY.\n\nHE IS THE WORST\n\nDo you even know what his piece of crap ship is named?\n\n- Milennium Falcon\n\n- USS Enterprise\n\n- Protector");
                                          //
                                          // Scenario 3.1.1: Choice 1 --
                                          //
                                          if(answer === "Millenium Falcon" || answer === "Falcon" || answer === "falcon"){
                                            console.log("recap: Yep. That's right, but thats not really gonna help you much. This dude is just pissed about everything.");

                                            alert("YEEEEEEEEEEEEEEEEEEEEEEEEEES.\n\n** Kylo force throws you out of the tour **");

                                            endGame();
                                          //
                                          // Scenario 3.1.2: Choice  2 --
                                          //
                                        } else if (answer === "USS Enterprise" || answer === "Enterprise" || answer === "enterprise"){
                                                console.log("recap: What are you a trekkie or something?");

                                                alert("NOOOOOOOOOOOOOOO\n\n** Kylo force throws you out of the tour **");

                                                endGame();
                                          //
                                          // Scenario 3.1.3: Choice 3 --
                                          //
                                        } else if (answer === "Protector" || answer === "protector"){
                                                console.log("recap: You're wrong and Kylo is just pissed about everything so don't take it personally. ");

                                                alert("No. But that sounds pretty badass, I might rename my ship.\n\n** Kylo force throws you out of the tour **");

                                                endGame();

                                          //
                                          // Scenario 3.1.4: Choice -- Vaccuum of Space
                                          //
                                          } else {
                                            console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                                            newTour();
                                          }

                            //
                            // Scenario 3.2: Choice 2 --
                            //
                          } else if(answer === "Hux" || answer === "hux") {
                                //
                                //Scenario 3.2.1: Question 1 --
                                //
                                var answer = prompt ("Naw but that dude is totally like my best friend.");
                                          //
                                          // Scenario 3.2.1: Choice 1 --
                                          //
                                          if(answer === ""){
                                            console.log("recap: ");

                                            alert();

                                            endGame();
                                          //
                                          // Scenario 3.2.2: Choice  2 --
                                          //
                                          } else if (answer === ""){
                                            console.log("recap: ");

                                            alert();

                                            endGame();
                                          //
                                          // Scenario 3.2.3: Choice 3 --
                                          //
                                          } else if (answer ===""){
                                            console.log("recap: ");

                                            alert();

                                            endGame();

                                          //
                                          // Scenario 3.2.4: Choice -- Vaccuum of Space
                                          //
                                          } else {
                                            console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                                            newTour();
                                          }
                            //
                            // Scenario 3.3: Choice 3 --
                            //
                            } else if (answer === "") {

                                //
                                //Scenario 3.3.1: Question 1 --
                                //
                                var answer = prompt ("");

                                          //
                                          // Scenario 3.3.1: Choice 1 --
                                          //
                                          if(answer === ""){
                                            console.log("recap: ");

                                            alert();

                                            endGame();
                                          //
                                          // Scenario 3.3.2: Choice  2 --
                                          //
                                          } else if (answer === ""){
                                                console.log("recap: ");

                                                alert();

                                                endGame();
                                          //
                                          // Scenario 3.3.3: Choice 3 --
                                          //
                                          } else if (answer ===""){
                                                console.log("recap: ");

                                                alert();

                                                endGame();

                                          //
                                          // Scenario 3.3.4: Choice -- Vaccuum of Space
                                          //
                                          } else {
                                            console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                                            newTour();
                                          }
                            //
                            // Scenario 3.4: Choice 4 -- Vacuum of Space
                            //
                            } else {
                              console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
                              newTour();
                            }
            }
        //
        //Scenario 1: Choice 4 -- Vacuum of Space
        //
         else {
          console.log("recap: You aren't very good at this game.\n\nJust\n\nStart\n\nOver.");
          newTour();
        }


function endGame(){
  var answer = prompt("Wow Guys, its been real and its been fun but it hasn't been real fun. We need some time to go adjust our motivators.\n\nUnless, you want to take another tour right now?\n\nYes or No?");

  if(answer === "take another tour" || answer === "yes"){
    location.reload();
  }
  else{
    alert("uuuuuh its a trap... just kidding. Close the window and get the heck out of here.\n\nMay the force be with you.");
  }
}

function newTour(){
  alert("NOOOOOOOOOOOOOOOO..IT CAN'T BE TRUUUUUUE!!!!!!\nyou just got sucked into the vaccuum of space.\n\nLet's try that again.");
  location.reload();
}
