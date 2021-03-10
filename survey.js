const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What music do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? ", (power) => {
              console.log(`Hi, my name is ${name}. I am an avid ${sport} fan! I also love ${activity} while listening to ${music} music. If it were up to me, it would always be ${meal} time and ${food} would always be on the menu! If I had a super power, it would be ${power}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});