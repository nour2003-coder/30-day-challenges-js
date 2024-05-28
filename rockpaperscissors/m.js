  // Game flow function
  const playGame = (playerChoice) => {
    /*  while (true) { */
       
       const computerChoice = getComputerChoice();
       const result = determineWinner(playerChoice, computerChoice);
       console.log(result);
       const playagain=document.getElementById("playAgain");
       playagain.classList.remove("hidden");
       playagain.addEventListener("click",(event)=>{
         event.preventDefault();
         playagain.classList.add("hidden");
     })
     playertext.innerHTML="<h2>Player One Chooses...</h2>";
 
       //alert(result);
 /*       if (askToPlayAgain()) {
         continue;
       } else {
         thanksForPlaying();
         break;
       } */
 /*     } */
   };
 const getComputerChoice = () => {
     const randomNumber = Math.floor(Math.random() * 3);
     const rpsArray = Array.from(document.getElementById("cp_gameboard").children);
     const resultcp=["rock","paper","scissors"];
     for (let j=0;j<rpsArray.length;j++){
       rpsArray[j].classList.add("hidden"); 
       const aff="<h2>"+j+"</h2>"
       console.log(aff)
       rpsArray[j].innerHTML=aff;
       rpsArray[j].textContent="";
 
     }
     let i;
     while(i<3){
       if(i === randomNumber){
         rpsArray[i].classList.toggle("hidden"); 
 
 
       }
     }
     console.log(rpsArray[randomNumber]);
     return resultcp[randomNumber];
   };
   
 const determineWinner = (player, computer) => {
   const playertext=document.getElementById("p1msg");
   const cp_session_score=document.getElementById("cp_session_score");
   const p1_session_score=document.getElementById("p1_session_score");
   const p1_all_time_score=document.getElementById("p1_all_time_score");
   const cp_all_time_score=document.getElementById("cp_all_time_score");
   let winner;
   if( player === computer){
     winner="Tie game!" ;
 
   }
   else{
     if( player === "rock" && computer === "paper"){
       winner="Computer wins!";
       cp_all_time_score.textContent=Number(cp_all_time_score.textContent)+1;
       cp_session_score.textContent=Number(cp_session_score.textContent)+1;
 
 
     }
     else if(player === "paper" && computer === "scissors"){
       winner=`Computer wins!`;
       cp_all_time_score.textContent=Number(cp_all_time_score.textContent)+1;
       cp_session_score.textContent=Number(cp_session_score.textContent)+1;
 
     }
     else if(player === "scissors" && computer === "rock"){
       winner=`Computer wins!`;
       cp_all_time_score.textContent=Number(cp_all_time_score.textContent)+1;
       cp_session_score.textContent=Number(cp_session_score.textContent)+1;
 
     }
     else{
       winner=`playerOne wins!`;
       p1_all_time_score.textContent=Number(p1_all_time_score.textContent)+1;
       p1_session_score.textContent=Number(p1_session_score.textContent)+1;
 
     }
 
   }
   document.addEventListener("DOMContentLoaded", function() {
     const result="<h2>"+winner+"</h2>";
     playertext.innerHTML=result;
     console.log(playertext);
 });
 
   return winner;
 };
 const askToPlayAgain = () => {
     return confirm("Play Again?");
   };
 
 //initGame();
 
 /* rock.addEventListener("mouseout",(event)=>{
     paper.classList.remove("fadeOut");
     scissors.classList.remove("fadeOut");
 
 })
 paper.addEventListener("mouseout",(event)=>{
     rock.classList.remove("fadeOut");
     scissors.classList.remove("fadeOut");
 
 })
 scissors.addEventListener("mouseout",(event)=>{
     paper.classList.remove("fadeOut");
     rock.classList.remove("fadeOut");
 
 }) */
 const rock=document.getElementById("rock");
 const cprock=document.getElementById("cp_rock");
 const cppaper=document.getElementById("cp_paper");
 const paper=document.getElementById("paper");
 const scissors=document.getElementById("scissors");
 const cpscissors=document.getElementById("cp_scissors");
 const playertext=document.getElementById("p1msg");
 
 rock.addEventListener("click",(event)=>{
     playGame("rock");
     playertext.innerHTML="<h2>Player One Chooses...rock</h2>";
     paper.classList.toggle("fadeOut");
     scissors.classList.toggle("fadeOut");
 
 })
 paper.addEventListener("click",(event)=>{
   
     playGame("paper");
     playertext.innerHTML="<h2>Player One Chooses...paper</h2>";
     rock.classList.toggle("fadeOut");
     scissors.classList.toggle("fadeOut");
 
 })
 scissors.addEventListener("click",(event)=>{
     playGame("scissors");
     playertext.innerHTML="<h2>Player One Chooses...scissors</h2>";
     rock.classList.toggle("fadeOut");
     paper.classList.toggle("fadeOut");
 
 
 })
 
 