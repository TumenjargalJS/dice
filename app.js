// тоглох ээлж хадгалах хувьсагч. нэгдүгээр тоглогчийн 0, хоёрдугаар тоглогчийг 1 гэе
var activePlayer = 1;
// Тоглогчдын цуглуулсан онооог хадгалах хувьсагч
var scores = [0, 0];
// тоглогчийн ээлжийн оноо хадгалах хувьсагч
var roundScore = 0;
// шооны буусан талын хадгалах хувьсагч. 1-6 гэсэн тооны аль нэг буух ёстой.
var dice = Math.floor(Math.random()*6) + 1;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = 'none';
