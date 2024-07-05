
const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const r2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const info = {};

r1.question("What is your name:  ", (name) => {
  info.name = name;
  


  r1.question("What is an activity you like doing?\n", (activity) => {
    info.activity = activity;
    
    r1.question("What do you listen to while doing that?\n", (music) => {
      info.music =  music;
      
      r1.question("What meal is your favourite? \n", (meal) => {
        info.meal =  meal;
        
        r1.question("What's your favourite thing to eat for that meal?\n", (favFood) => {
          info.favFood =  favFood;
          
          r1.question("Which sport is your absolute favourite?\n", (sport) => {
            info.sport =  sport;
            
            r1.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (superpower) => {
              info.superpower =  superpower;
               console.log(info);
               r1.close()
            })
            
          })
          
        })
        
      })
      
    })
    

  })
});




