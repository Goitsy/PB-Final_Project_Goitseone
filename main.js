//Imported libraries that add color and syles to console.logs
//readline sync (a library for interactive input from user using the console)
//clear library was used for a more cleaner output that clears the console after interactions

const readlineSync = require("readline-sync");
const colors = require("colors");
const emoji = require("node-emoji");
const clear = require("clear");
const chalk = require("chalk");

//I built an array of card objects(cards) that includes the major arcarna cards with name and meaning
const majorArcanaCards = [
  {
    name: ` ${emoji.get("clown_face")} ${chalk.underline.bold.magenta(
      "THE FOOL!"
    )} ${emoji.get("clown_face")}`,
    meaning: ` 
      
             ${chalk.cyanBright.blueBright(`
                The Fool represents new beginnings, adventures, spontaneity and a sense 
                of returning to innocence.Being a 'Fool' in this context means embarking on your
                journey with a sense of optism and an innate trust in your own capabilities.
                This card encourages taking risks and embracing the unknown with trust that things
                will unfold as they should. The Fool reminds us to keep an open mind,
                and to  take on the world with child-like  wonder and curiosity, unburrdened by past 
                experiences or present expectations\n`)}  `,
  },
  {
    name: ` ${emoji.get("tophat")}${chalk.underline.bold.magenta(
      "THE MAGICIAN"
    )}${emoji.get("zap")} `,
    meaning: `
                ${chalk.cyanBright.blueBright(`
                The Magician signifies creativity, the ability to use your innate gifts and talents. 
                It suggests that you already have everything you need to turn the tides in your favour. This
                card reminds us of the  potential and power of the human will. It encourages taking action and
                using your talents more efficiently. This card highlights the importance of concentrated effort
                together with the alignment of your mental and emotional 
                resources\n`)}`,
  },
  {
    name: `${chalk.underline.bold.magenta("✨THE HIGH-PRIESTESS✨📿")}`,
    meaning: `
     ${chalk.cyanBright.blueBright(`
               The High Priestess represents intuition, mysteries and the things that lie hidden
               in the subconscious. It suggests in trusting your inner wisdom and exploring the things 
               you hold as Truths. This card advises listening to you intuition and paying attention to dreams
               that can reveal hidden insights. It encourages a carving out time for reflectiion and inner exploration. 
               The High Priestess embodies the balance betweeb the conscious and uncoscious. Urging you to 
               look beyond the surface in order to rediscover the truths within.\n`)}
           
              
        `,
  },
  {
    name: `${chalk.underline.bold.magenta("💎👑THE EMPRESS👑💎")}`,
    meaning: ` ${chalk.cyanBright.blueBright(`
              The Empress symbolises a time of abundance, nurturing and great creativity.
              A period of great growth and prosperity. This card asks is to nurture the
              relationships that inspire creativity and beauty in our lives. It encourages
              you to remember to take care of yourself and your community. The Empress is a
              powerful reminder of the nurturing and creative aspects of life, urging you to
              cultivate beauty, harmony, and love in your immediate environment.\n`)}

          `,
  },
  {
    name: `${chalk.underline.bold.magenta("👑👑THE EMPEROR👑👑")}`,
    meaning: `
                   ${chalk.cyanBright.blueBright(`
              The Emperor signifies authority, structure, and leadership. This card suggests a
              disciplined approach and establish order in your affairs. It suggests a time for
              stability, great protection, and the ability to make clear-headed decisions in your
              life.It advices taking responsibility and asserting your authority in a fair and just
              manner. The Emperor emphasizes the importanxe if structure, voundaries, and the power
              of strategic planning and foresight in achieving successful long-term goals.\n`)}                         
          `,
  },
  {
    name: `${chalk.underline.bold.magenta("✨⛪THE HIEROPHANT⛪✨")}`,
    meaning: `
                  ${chalk.cyanBright.blueBright(`    
                The Hierophant represents a traditional path, spiritual guidance and a comformity to
                social norms. It suggests seeking knowledge from estanlished beliefs and institutions. 
                The Hierophant could also signify learning from a mentor and following established traditions
                and knowledge-systems.This card advices finding meaning in conformity and embrasing spiritual 
                guidance. The Hierophant is about the pursuit of deeper understanding and the wisdom tha comes
                from structured learning and communal support.\n`)}
          `,
  },
  {
    name: `${chalk.underline.bold.magenta("💗💕THE LOVERS💕💗")}`,
    meaning: `   
                   ${chalk.cyanBright.blueBright(`
                The Lovers represnt relationships, choices, and personal belief systems. It signifies partnerships
                based on mutual respect and understanding. This card suggests making decisions from the heart and 
                choosing paths that align with your values. It encourages exploring the harmony between opposites
                and embracing love in all its forms. The Lovers also highlight the importance of conscious choices
                in love and life, reminding you to seek alignment between your values, actions, and partnerships.\n`)}
          `,
  },
  {
    name: `${chalk.underline.bold.magenta("✨🚂THE CHARIOT🚂✨")}`,
    meaning: `
                   ${chalk.cyanBright.blueBright(`
                  The Chariot points at a time of great determination, willpower, and victory.
                  It suggests overcoming obstacles through consistent focus and preseverence.
                  This card represents taking control of your life's direction and relying on
                  your innerstrength. It advices setting clear goals and staying committed to
                  achieving them, despite challenges. The Chariot embodies the triumph of leaning
                  on your inner determination, discipline, highlighting the need for balance , and
                  the mastery of emotions to achieve success.\n`)}
          `,
  },
  {
    name: `${chalk.underline.bold.magenta("🦁✨STRENGTH✨🦁")}`,
    meaning: `

                   ${chalk.cyanBright.blueBright(`
                  The Strength card is a card of inner courage, resilience, and compassion. It signifies
                  overcoming obstacles with grace and integrity. This card suggests tapping into your inner 
                  strength and trusting in your ability to endure difficulties. It encourages showing kindess
                  and patience in challenging situations, both to others and yourself.
                  Strength is about the powe of quiet confidence and the ability to influence without force, 
                  highlightung the transformative power of compassion and self-control.\n`)}
          `,
  },
  {
    name: `${chalk.underline.bold.magenta("🍃🍃🌀THE HERMIT🌀🍃🍃")}`,
    meaning: `
                   ${chalk.cyanBright.blueBright(`      
                  The Hermit stands for introspection, solitude, and inner guidance. It signifies seeking
                  answers within and taking the time to self-reflect. This card suggests withdrawing from
                  distractions to focus on your inner wisdom and spiritual growth. It advices learning from
                  solitude and embracing the insight that comes with the quiet moments. The Hermit is about 
                  the quest for knowledge and enlightenment, encouraging you to find your own trurh and follow
                  your unique path of discovery.\n`)}
          `,
  },
  {
    name: `${chalk.underline.bold.magenta("🛞🌀WHEEL OF FORTUNE🛞🌀")}`,
    meaning: `
                   ${chalk.cyanBright.blueBright(`   
                  The Wheel of Fortune symbolizes destiny, change, and cycles. It signifies the ebb and flow of
                  life's experiences and the influence of fate. This card siggests being open to new opportunities 
                  and embracing the changes that come your way. It advices trusting in the natural rhythm of life and
                  remaining adaptable to circumstances. The Wheel of Fortune highlights the interconnectedness of events
                  and the importance of being mindful of the choices that influence your life's path.\n`)}
          `,
  },
  {
    name: `${chalk.underline.bold.magenta("🗽⚖✨JUSTICE✨🗽")}`,
    meaning: `
                   ${chalk.cyanBright.blueBright(`
                  Justice is a card of fairness, truth, and balance. It signifies making decicions with
                  impartiality and a sense of integrity. This card suggests seeking justice and accountability 
                  in all aspects of life. It advices taking responsibility for your actions and making choices
                  that align with your moral principles and ethical values. Justice highlights the tender balance
                  between cause and effect. emphasiszing the importance if fairness, honesty, and the pursuit of truth
                  in achieving harmony and resolution.\n`)}
          `,
  },
  {
    name: `${chalk.underline.bold.magenta("💫😵‍💫THE HANGED MAN😵‍💫💫")}`,
    meaning: `

                     ${chalk.cyanBright.blueBright(`
                    The Hanged Man signifies suspension, letting go, and a forging of new perspectives. It signifies surrendering
                    to the present and gaining a deeper understanding of self through sacrifice of inefficient ideals. This card suggests
                    shifting perspective and embracing unconventional ways of thinking and acting. It advices releasing attachments 
                    and finding enlightenment in surrender. The Hanged Man is about the power in a pause and the growth that comes fom 
                    reflectiom. It encourages you to see things from a differnt angle and find growth in letting go.\n`)}
                `,
  },
  {
    name: `${chalk.bold.underline.magenta("✨💀DEATH💀✨")}`,
    meaning: ` 
                   ${chalk.cyanBright.blueBright(`
                  Death is a symbol of transformation, alchemy, endings, and new beginnings. It signifies the natural cycles of life
                  and the need for letting go of the old and embracing the new. This is a card of releasing what no longer serves you. 
                  It advices accepting transitions with grace and trusting in the renewal that follows. Death is about the inevitability
                  of change and the promise of rebirth. This highlights the importance of making room for growth and the opportunities it
                  gifts us.\n`)}
              `,
  },
  {
    name: `${chalk.underline.bold.magenta("✨👼TEMPERANCE👼✨")}`,
    meaning: `
                  ${chalk.cyanBright.blueBright(`     
                 Temperance is the ability to find balance and harmony through the act of moderation. It signifies blending 
                 opposing forces to find inner peace and equilibrium. This card suggests seeking moderation in all aspects of 
                life and integrating different aspects of yourself. It advices finding a middle path and avoiding exterems to 
                achieve a sense of wholeness. Temperance is about the art of alchemy and harmony that comes from the careful 
                blending of elements, promoting patience, and mindful balance in life.\n`)}
                `,
  },
  {
    name: `${chalk.underline.bold.magenta("👹😈THE DEVIL😈👹")}`,
    meaning: `
                    ${chalk.cyanBright.blueBright(`
                  The Devil represents the minute details, earthly contracts, and discipline from temptation. 
                  It signifies the ability to be trapped by worldly desires and the limitations that can bring.
                  Positively it suggests looking at patterns and contracts in great detail before attaching
                  yourself to their outcome. The Devil is about the awareness of inner shadows and the temptations
                  that can lead to stagnation, highlighting the need for self-awreness and liberation from 
                  destructive habits.\n`)}
              `,
  },
  {
    name: `${chalk.underline.bold.magenta("🗼🗼🗼THE TOWER🗼🗼🗼")}`,
    meaning: `
                      ${chalk.cyanBright.blueBright(`
                    The Tower symbolizes upheaval, sudden changes, and revelations. It represents a disruption
                    in old way of thinking and doing breaking down structures that no longer serve a purpose.
                    This card suggests recognizing unhealthy patterns and limitations that hold you back.
                    It advices rebuilding from the ground up with newfound clarity and insight. The Tower is
                    about the power of crisis to bring clarity and the essential breakdown of false structures 
                    to pave the way for genuine growth and transformation.\n`)}
                `,
  },
  {
    name: `${chalk.underline.bold.magenta("🌠🌠🌟🌟THE STAR🌟🌟🌠🌠")}`,
    meaning: `
                      ${chalk.cyanBright.blueBright(`
                    The Star represents hope, inspiration, and optimism. It signifies healing and renewal after
                    challenging times. This card suggests trusting in divine guidance and believing in brighter
                    days ahead. It advices staying hopeful and open to receiving blessings and opportunities that
                    align with your highest purpose. The Star is about the guiding light of inspiring and the profound
                    sense of peace that comes from a connection to the divine and the life's abudant possibilities.\n`)}
                `,
  },
  {
    name: `${chalk.bold.underline.magenta("🌕🌜THE MOON🌙🌕")}`,
    meaning: `
                      ${chalk.cyanBright.blueBright(`
                    The Moon represents intuition, illusiions, and subconscious thoughts. It signifies navigating
                    through uncertainty and exploring hidden aspects of yourself. This card suggests trusting your 
                    instinct and paying attention to dreams or intuitive messages. It advices embracing the mysteries
                     of life and trusting the journey, even when things seem unclear. The moon us about the power of
                     the subconscious and the transformative potential of embracing the unknown and the shadow aspects
                     of the human psyche.\n`)}

                `,
  },
  {
    name: `${chalk.underline.bold.magenta("🌞☀☀THE SUN☀☀🌞")}`,
    meaning: `
                     ${chalk.cyanBright.blueBright(` 
                   The Sun symbolizes success, joy and vitality. It signifies clarity, confidence, and optimism in
                   all areas of life. This card suggests embracing your true self and expressing your unique gifts.
                   It advices basking in the warmth of happiness and sharing your light with others. The Sun is about
                   embracing the radiance of life and the fulfillment that comes with living our most authentic selves.
                  The Sun embraces all the positive aspects of existence, bringing warmth, growth and enlightenment.\n`)}

                `,
  },
  {
    name: `${chalk.underline.bold.magenta("🌍🌍THE WORLD🌍🌍")}`,
    meaning: `
                    ${chalk.cyanBright.blueBright(`
                   The World symbolizes completion, achievement, and fulfillment. It signifies the successful conclusion
                   of a cycle and the realization of your goals. This card suggests celebrating your accomplishments and
                   embracing the interconnectedness of all things. It advices recognising the harmony in your life and the 
                   completion of significant projects of life phases. The World is about the culmination of efforts and the
                   unity of the diverse aspects of life, bringin a sense of wholeness and completion.\n`)}

                `,
  },
];

/*This function selects a random card from the given deck of cards and makes sure that the
 selected card is removed from the deck, so it cannot be selected again. (I ran into the issue of
 a card repeating within a single reading
 1.the fn takes the argument deck which is the arr of obj (majorArcarna)
 2.We generate a random floating point (remember that Math random generates
 a rando num ,floating point, 0 incl 1 excl)
 Math rando * deck helps us to scale this 'num' to a range from (incl) 0  to legth of deck(excl)
 Math floor(Math round would work too) helps us round this number giving us a round interger  from 0 to (length of deck) -1
 We use this integer to select a card from the deck

 I used splice (randomIndex,1) to modify the deck by removing one elemnt at the specified(randomindex)
 Splice returns an array containing the removed  elements
 [0] helps us access the element returned by splice(this is the removed card)
 the card is stored in a variable(card)
 //We return the card that was removed from the deck
 */
const chooseTarotCard = (deck) => {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck.splice(randomIndex, 1)[0];
  return card;
};

/*I ran into styling problems in the terminal because my app is super wordy
The (PrintCardDetails) came in handy because I can print the details of a 
card in a styled format.

1. The card argument is the card object that contains card name and meaning

2. with card.meaning.trim().split("\n"): splits the meaning of the cards into individual lines, removing any whitespace
from beginning to end.

3. lines.forEach is used to iterate through each line of the card's meaning and prints it.

This I found made the terminal easier to read and as a form of 'text formatting'

*/

const printCardDetails = (card) => {
  const lines = card.meaning.trim().split("\n");
  console.log(chalk.bold.underline.yellowBright(`\n${card.name}:`));
  lines.forEach((line) => console.log(`  ${line.trim()}`));
};

/*After seeing how the above worked I used a fn to print my headers as I found it myade my code much more intuitive
(for future me who wants to keep building  this app :) )
This fn(printHeader) prints a header with a given title in a styled format.(this was to keep styling of headers uniform)
the title is the text we will print as header(We will see how this function is used in the below code)

*/

const printHeader = (title) => {
  console.log(chalk.underline.bold.magentaBright(`\n🔮 ${title} 🔮\n`));
};

/*

I added this function a bit later on in the project but I saw the need for it because
I wanted to keep the user in the main menu and give the user an opportunity to make various choices instead of one before the game exits
This fn promps user to press Enter to continue
We use readlinesync to wait for the user to press enter.

*/

const waitForEnter = () => {
  console.log(chalk.green("\nPress Enter to return to the main menu."));
  readlineSync.question();
};

/*This is a function that perfoms our one card reading
We start with a cosnsole.clear() this clears the console for better reading and no crowding
we use the chalk library to print the tite
We call our chooseTarot card function to select our random card
We call our print card details(card) to print the selected card details

We call our wait for enter fn to keep the user in the game and to wait for user to press enter to return to the main menu

*/
const oneCardReading = () => {
  console.clear();
  console.log(chalk.bold.magentaBright("🔮 One-Card Reading:"));
  const card = chooseTarotCard(majorArcanaCards);
  printCardDetails(card);
  waitForEnter();
};

/*
We follow the same logic as above using bracket notation we access two cards instead of one and print their details

*/

const twoCardReading = () => {
  console.clear();
  console.log(
    chalk.bold.magentaBright(
      "🔮🔮 Two-Card Reading: \n🔸 Situation, 🔸 Challenge"
    )
  );
  const cards = [
    chooseTarotCard(majorArcanaCards),
    chooseTarotCard(majorArcanaCards),
  ];
  cards.forEach(printCardDetails);
  waitForEnter();
};

/*
We follow the same logic as above using bracket notation we access three cards instead of one and print their details

*/

const threeCardReading = () => {
  console.clear();
  console.log(
    chalk.bold.magentaBright(
      "🔮🔮🔮 Three-Card Reading: \n🔸 Past, 🔸 Present, 🔸 Future"
    )
  );
  const cards = [
    chooseTarotCard(majorArcanaCards),
    chooseTarotCard(majorArcanaCards),
    chooseTarotCard(majorArcanaCards),
  ];
  cards.forEach(printCardDetails);
  waitForEnter();
};

const displayTarotInstructions = () => {
  console.clear();
  const instructions = `
    Shuffling and Selecting Cards:
    1. One-Card Reading: Get a quick insight.
    2. Two-Card Reading: Explore a situation and its challenge.
    3. Three-Card Reading: Understand the past, present, and future.
  `;
  const disclaimer = `
  Disclaimer: This app is for gaming purposes only. The producers are not
  responsible for any decisions made after inquiring our cards.`;
  printHeader("Instructions for Tarot Reading");
  console.log(chalk.yellowBright(instructions));
  console.log(chalk.bold.redBright(disclaimer));
  waitForEnter();
};

const displayTarotHistory = () => {
  console.clear();
  const history = `
    Tarot cards have been used for centuries as a tool for divination and insight. Originating in the mid-15th century in Europe,
    they were initially used for playing games. Over time, they evolved into a method for spiritual and self-reflection, with each
    card holding unique symbolism and meaning.
  `;
  printHeader("History of Tarot Cards");
  console.log(chalk.yellowBright(history));
  waitForEnter();
};

/*This array contains objects representing each menu option.
Each object has:
optionKey: A string representing the user's choice (e.g., "1" for Instructions).
description: A string representing the menu text.
action: A function to be executed when the corresponding option is selected. 


I chose this way of compartmelising the code for more readibility and in an effort to "separate my concerns"
*/
const mainMenuOptions = [
  {
    optionKey: "1",
    description: "📜 Instructions",
    action: displayTarotInstructions,
  },
  {
    optionKey: "2",
    description: "📚 History of Tarot",
    action: displayTarotHistory,
  },
  {
    optionKey: "3",
    description: "🔮 One-Card Reading",
    action: oneCardReading,
  },
  {
    optionKey: "4",
    description: "🔮 Two-Card Reading",
    action: twoCardReading,
  },
  {
    optionKey: "5",
    description: "🔮 Three-Card Reading",
    action: threeCardReading,
  },
  {
    optionKey: "6",
    description: "❌ Exit",
    action: () => {
      console.log(chalk.bold.magentaBright("Goodbye! 🌈"));
      process.exit(0);
    },
  },
];

/* 
When the gameMenu function runs:

It repeatedly clears the screen and prints a styled header.(We use our prinHeader fn())
It builds and displays a menu with options for the user to choose from.(menuText)
It waits for the user to enter their choice.
It finds the corresponding action based on the user's choice and executes it.
If the user enters an invalid choice, it displays an error message and waits 
for the user to press Enter before showing the menu again.
This loop continues until the user selects the "Exit" option, this prints a goodbye message 
and ends the program using process.exit(0):fn of Node modules that helps exit applications.

*/

const gameMenu = () => {
  while (true) {
    console.clear();
    printHeader("Welcome to Makhosi's Tarot Card Reading App!");
    const menuText = mainMenuOptions
      .map((option) => `${option.optionKey}. ${option.description}`)
      .join("\n");
    const choice = readlineSync.question(
      chalk.blue(
        chalk.bold.underline.yellowBright("MAIN MENU:\n") +
          menuText +
          chalk.greenBright("\nEnter your choice: ")
      )
    );

    const selectedOption = mainMenuOptions.find(
      (option) => option.optionKey === choice
    );
    if (selectedOption) {
      selectedOption.action();
    } else {
      console.log(chalk.red("Invalid Choice! ❌"));
      waitForEnter();
    }
  }
};

/*Calls the gameMenu function to start the program and display the main menu. */
gameMenu();
