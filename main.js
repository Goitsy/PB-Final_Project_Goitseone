const readlineSync = require("readline-sync");
const colors = require("colors");
const emoji = require("node-emoji");
const clear = require("clear");
const chalk = require("chalk");

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
const chooseTarotCard = (tarotDeck) => {
  const randomIndex = Math.floor(Math.random() * tarotDeck.length);
  const card = tarotDeck[randomIndex];
  tarotDeck.splice(randomIndex, 1);
  return card;
};

const performAReading = (typeOfReading) => {
  clear();
  let chosenCards = [];
  let describeTypeOfReading = "";
  let tarotDeck = [...majorArcanaCards];

  switch (typeOfReading) {
    case "one":
      chosenCards.push(chooseTarotCard(tarotDeck));
      describeTypeOfReading = chalk.bold.magentaBright("🔮 One-Card Reading:");
      break;
    case "two":
      describeTypeOfReading = chalk.bold.magentaBright(
        "🔮🔮 Two-Card Reading: \n🔸 Situation, 🔸 Challenge"
      );
      for (let i = 0; i < 2; i++) {
        chosenCards.push(chooseTarotCard(tarotDeck));
      }
      break;
    case "three":
      describeTypeOfReading = chalk.bold.magentaBright(
        "🔮🔮🔮 Three-card Reading: \n🔸 Past, 🔸 Present, 🔸 Future"
      );
      for (let i = 0; i < 3; i++) {
        chosenCards.push(chooseTarotCard(tarotDeck));
      }
      break;
    default:
      console.log(chalk.red("Invalid Reading Type"));
      return;
  }

  console.log(
    chalk.underline.bold.magentaBright(
      "🔮 Welcome to Makhosi's Tarot Card Reading App! 🔮\n"
    )
  );
  console.log(describeTypeOfReading);

  chosenCards.forEach((card, index) => {
    const lines = card.meaning.trim().split("\n");

    console.log(chalk.yellowBright(`\n${card.name}:`));
    lines.forEach((line) => {
      console.log(`  ${line.trim()}`);
    });
    if (index < chosenCards.length - 1) {
      console.log(
        "\n-----------------------------------------------------------------------------------------------------------------------------------------\n"
      );
    }
  });

  console.log(chalk.green("\nPress Enter to return to the main menu."));
  readlineSync.question();
};

const displayTarotInstructions = () => {
  clear();
  console.log(
    chalk.underline.bold.magentaBright(
      "🔮 Welcome to Makhosi's Tarot Card Reading App! 🔮\n"
    )
  );
  console.log(
    chalk.bold.bgBlueBright.blue("🌼 INSTRUCTIONS FOR TAROT READING: 🌼")
  );
  console.log(chalk.bold.bgGreenBright("Shuffling and Selecting Cards:"));
  console.log(chalk.yellowBright("1. One-Card Reading: Get a quick insight."));
  console.log(
    chalk.yellowBright(
      "2. Two-Card Reading: Explore a situation and its challenge."
    )
  );
  console.log(
    chalk.yellowBright(
      "3. Three-Card Reading: Understand the past, present, and future."
    )
  );

  console.log(chalk.green("\nPress Enter to return to the main menu."));
  readlineSync.question();
};

const displayTarotHistory = () => {
  clear();
  console.log(
    chalk.bold.underline.magentaBright("\n🌟  History of Tarot Cards 🌟")
  );
  console.log(chalk.bold.bgBlueBright.blue("🌼 ORIGINS OF TAROT: 🌼"));
  console.log(
    chalk.yellowBright(
      `
    Tarot cards have been used for centuries as a tool for divination and insight. Originating in the mid-15th century in Europe, 
    they were initially used for playing games. Over time, they evolved into a method for spiritual and self-reflection, with each 
    card holding unique symbolism and meaning.
    `
    )
  );

  console.log(chalk.green("\nPress Enter to return to the main menu."));
  readlineSync.question();
};

const gameMenu = () => {
  let exitGame = false;

  while (!exitGame) {
    clear();
    console.log(
      chalk.underline.bold.magentaBright(
        "🔮 Welcome to Makhosi's Tarot Card Reading App! 🔮\n"
      )
    );
    const choice = readlineSync.question(
      chalk.blue(
        chalk.bold.underline.yellowBright("CHOOSE A READING:\n") +
          "🔮[1] One-Card Reading\n" +
          "🔮[2] Two-Card Reading\n" +
          "🔮[3] Three-Card Reading\n" +
          "📜[4] Instructions\n" +
          "📚[5] History of Tarot\n" +
          chalk.red("  [6]❌  Exit\n\n") +
          chalk.greenBright("Enter your choice: ")
      )
    );
    switch (choice) {
      case "1":
        console.log(chalk.blue("Performing 1 card reading..."));
        performAReading("one");
        break;
      case "2":
        console.log(chalk.blue("Performing 2 card reading..."));
        performAReading("two");
        break;
      case "3":
        console.log(chalk.blue("Performing 3 card reading..."));
        performAReading("three");
        break;
      case "4":
        displayTarotInstructions();
        break;
      case "5":
        displayTarotHistory();
        break;
      case "6":
        console.log("Goodbye! 🌈");
        exitGame = true;
        break;
      default:
        console.log(chalk.red("Invalid Choice! ❌"));
    }
  }
};

gameMenu();
