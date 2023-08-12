import inquirer from "inquirer";

interface Inquirer{
num:number,
}

const GuessingGame=async()=>{

for(let i=0;i<3;i++){

    const {num}:Inquirer=await inquirer.prompt([
        {
            type:'number',
            name:'num',
            message:'Welcome to Guessing Game enter the number you have guessed'
    
        }
    ])
    
    const generated_num= Math.floor(Math.random()*10) // Generated a random number between 1 to 10
    
    if(generated_num===num){
        console.log(`You guessed right. the number is ${generated_num}`)
        break;
    }else{
        console.log('incorrect try again')
    }
}

}
async function repeat() {
    do {
      await GuessingGame();
      var { repeat }:string = await inquirer.prompt([
        {
          type: "confirm",
          name: "repeat",
          message: "Do you want to play again?",
        },
      ]);
    } while (repeat);
  }
  
  // Calling the repeat  function
  repeat();
