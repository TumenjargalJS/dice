// тоглох ээлж хадгалах хувьсагч. нэгдүгээр тоглогчийн 0, хоёрдугаар тоглогчийг 1 гэе
var activePlayer = 1;
// Тоглогчдын цуглуулсан онооог хадгалах хувьсагч
var scores = [0, 0];
// тоглогчийн ээлжийн оноо хадгалах хувьсагч
var roundScore = 0;
// шооны буусан талын хадгалах хувьсагч. 1-6 гэсэн тооны аль нэг буух ёстой.


document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
document.getElementById("current-0").textContent = '0';
document.getElementById("current-1").textContent = '0';
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
document.querySelector(".btn-roll").addEventListener("click", function(){
    var diceNumber = Math.floor(Math.random()*6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + '.png'; 
    // alert("Шоог шидлээ : " + diceNumber);
}
);
