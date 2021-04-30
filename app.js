var diceDom = document.querySelector(".dice");
var activePlayer;
var scores;
var roundScore;
var isNewGame;
initGame();
function initGame(){
    isNewGame = true;
    activePlayer = 0;
    // Тоглогчдын цуглуулсан онооог хадгалах хувьсагч
    scores = [0, 0];
    // тоглогчийн ээлжийн оноо хадгалах хувьсагч
    roundScore = 0;
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    diceDom.style.display = "none";

    document.getElementById('name-0').textContent = 'Player1';
    document.getElementById('name-1').textContent = 'Player2';

    document.querySelector('.player-0-panel').classList.remove("winner");
    document.querySelector('.player-1-panel').classList.remove("winner");

    document.querySelector('.player-0-panel').classList.remove("active");
    document.querySelector('.player-1-panel').classList.remove("active");
    document.querySelector('.player-0-panel').classList.add("active");
}


//ROLL DICE товчны листнер
document.querySelector(".btn-roll").addEventListener("click", function(){
    if(isNewGame === true){
        var diceNumber = Math.floor(Math.random()*6) + 1;
        diceDom.style.display = "block";
        diceDom.src = "dice-" + diceNumber + '.png'; 
        // alert("Шоог шидлээ : " + diceNumber);
        //Тоглогчийн ээлжийн оноог өөрчлөнө. Буусан тоо 1 ээс ялгаатай бол идэвхтэй тоглогчийн 
        if(diceNumber !== 1){
        // 1 ээс ялгаатай тоо буулаа. буусан тоог тоглогчид нэмж өгнө
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        }
        else{
            switchToNextPlayer();
        }
    }
    else{
        alert("Тоглоом дууссан.");
    }
           
}
);
// HOLD товчны эвент лиснтер
document.querySelector(".btn-hold").addEventListener("click", function(){
    if(isNewGame === true){
         // ул тоглогчийн ээлжийн оноог глоболь онооон дээр нэмж өгнө
        scores[activePlayer] = scores[activePlayer] + roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 100){
            isNewGame = false;
            document.getElementById('name-' + activePlayer).textContent = 'winner';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.active').classList.remove('active');
            score[activePlayer] = 0;
        } 
        else{
        switchToNextPlayer();  
        }
   }    
   else{
        alert("Тоглоом дууссан.");
   }
}  
);

// тоглогч сольдог функц
function switchToNextPlayer(){
    //1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        // энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
        document.getElementById("current-" + activePlayer).textContent = 0;
        roundScore = 0;
        //хэрэв идэвхтэй тоглогч нь 0 байвал 1 болгоно. тоглогчийн 
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);    
         // улаан цэгийг хайж ольё
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");

        //шоог түр алга болгоно
        diceDom.style.display = "none";
}
// New game товчны эвент листнер
document.querySelector(".btn-new").addEventListener("click", initGame);