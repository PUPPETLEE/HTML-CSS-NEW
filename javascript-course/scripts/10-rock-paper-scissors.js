   //save this in the local storage before you change it at least once
      /*let score = {
        wins: 0,
        losses: 0,
        tie: 0
      };
      */ 


      //add a json stringify to convert the object to a string
      const score = JSON.parse(localStorage.getItem('score') || JSON.stringify({
        //if the value is null when we click the reset-score button
        wins: 0,
        losses: 0,
        tie: 0
      }));
      updateScoreElement();

      function updateScoreElement(){
        //we need to display the score when the website start
        document.querySelector('.js-score').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`;

      }
     
      
      //WE NEED TO CCONVERT JSON FILE TO AN OBJECT 
      //console.log(JSON.parse(localStorage.getItem('score')));



      function playGame(playermove){
        let computerMove = pickComputerMove(); 

          let result = '';
        if(playermove === 'scissors'){
            if(computerMove === 'rock'){
            result = 'You Lose'
            }else if (computerMove === 'paper'){
            result = 'You Win';
            }
            else if (computerMove === 'scissors'){
            result = 'Tie';
            }

        }else if (playermove === 'rock'){
            if(computerMove === 'rock'){
            result = 'Tie'
            }else if (computerMove === 'paper'){
            result = 'You Lose';
            }
            else if (computerMove === 'scissors'){
            result = 'You Win';
            }
        }else if(playermove === 'paper'){
            if(computerMove === 'rock'){
              result = 'You Win'
            }else if (computerMove === 'paper'){
              result = 'Tie';
            }
            else if (computerMove === 'scissors'){
              result = 'You Lose';
            }
        }


        
        if(result === "You Win"){
              score.wins += 1 ;
            }else if (result === "You Lose"){
              score.lose += 1 ;
            }else {
              score.tie += 1 ;
            }

            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('.js-result').innerText = `${result}`;

            document.querySelector('.js-moves').innerHTML = `
             You <img class="move-icon" src="img/${playermove}-emoji.png" >
             <img class="move-icon" src="img/${computerMove}-emoji.png" >
              Computer
            `;

            updateScoreElement();

         // alert(`You picked ${playermove}. Computer picked ${computerMove}. ${result}\n Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.tie}`);
      };


      
      

      function pickComputerMove(){
      const randomNumber = Math.random();

      //we need to return this computer move;
      let computerMove = '';


      /*
      0 <= randomNumber < 0.3333 -> 'rock'
      0.3333 <= randomNumber < 0.6667 -> 'paper'
      0.6667 <= randomNumber < 1 -> 'scissors'
      */
      if(randomNumber >=0 && randomNumber < 1 / 3){
      computerMove = 'rock';
      }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
      }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
        }
        return computerMove;
      };