"use strict";

var time = 0;
var score = 0;
var mode;
var game = false;
var A_high = 20;
var B_high = 35;
var C_high = 70;
var high_score = 0;
var no1_time, no2_time, no3_time, no4_time, no5_time;

window.onload = global();

//グローバル設定
function global() {
  //タイム
  if (time > 999) {
    time = 999;
  } else if (time < 0) {
    time = 0;
  }
  document.getElementById("tm").textContent = "⏱" + ("000" + time).slice(-3);
  //スコア
  if (score > 999) {
    score = 999;
  } else if (score < 0) {
    score = 0;
  }
  document.getElementById("sc").textContent = ("000" + score).slice(-3);
  setTimeout("global()", 1);
}

//ゲームスタート
$("#thirty").click(function () {
  if (!game) {
    time = 31;
    mode = "A";
    high_score = A_high;
    game_start();
  }
});
$("#fifty").click(function () {
  if (!game) {
    time = 51;
    mode = "B";
    high_score = B_high;
    game_start();
  }
});
$("#hundred").click(function () {
  if (!game) {
    time = 101;
    mode = "C";
    high_score = C_high;
    game_start();
  }
});
function game_start() {
  alert("ゲームスタート");
  game = !game;
  score = 0;
  document.getElementById("hi").textContent = ("000" + high_score).slice(-3);
  time_minus_one();
  no1_time = 70 + Math.floor(Math.random() * 51);
  no2_time = 70 + Math.floor(Math.random() * 51);
  no3_time = 70 + Math.floor(Math.random() * 51);
  no4_time = 70 + Math.floor(Math.random() * 51);
  no5_time = 70 + Math.floor(Math.random() * 51);
  whack_it();
}

function whack_it() {
  //1番目
  if (no1_time > 0) {
    no1_time -= 1;
  } else if (no1_time < 0) {
    no1_time += 1;
  }
  if (no1_time == 50) {
    $("#no1").fadeIn(500);
  }
  if (no1_time == 0) {
    $("#no1").fadeOut(500);
    no1_time = -12;
  }
  if (no1_time == -1) {
    no1_time = 70 + Math.floor(Math.random() * 51);
  }
  //2番目
  if (no2_time > 0) {
    no2_time -= 1;
  } else if (no2_time < 0) {
    no2_time += 1;
  }
  if (no2_time == 50) {
    $("#no2").fadeIn(500);
  }
  if (no2_time == 0) {
    $("#no2").fadeOut(500);
    no2_time = -12;
  }
  if (no2_time == -1) {
    no2_time = 70 + Math.floor(Math.random() * 51);
  }
  //3番目
  if (no3_time > 0) {
    no3_time -= 1;
  } else if (no3_time < 0) {
    no3_time += 1;
  }
  if (no3_time == 50) {
    $("#no3").fadeIn(500);
  }
  if (no3_time == 0) {
    $("#no3").fadeOut(500);
    no3_time = -12;
  }
  if (no3_time == -1) {
    no3_time = 70 + Math.floor(Math.random() * 51);
  }
  //4番目
  if (no4_time > 0) {
    no4_time -= 1;
  } else if (no4_time < 0) {
    no4_time += 1;
  }
  if (no4_time == 50) {
    $("#no4").fadeIn(500);
  }
  if (no4_time == 0) {
    $("#no4").fadeOut(500);
    no4_time = -12;
  }
  if (no4_time == -1) {
    no4_time = 70 + Math.floor(Math.random() * 51);
  }
  //5番目
  if (no5_time > 0) {
    no5_time -= 1;
  } else if (no5_time < 0) {
    no5_time += 1;
  }
  if (no5_time == 50) {
    $("#no5").fadeIn(500);
  }
  if (no5_time == 0) {
    $("#no5").fadeOut(500);
    no5_time = -12;
  }
  if (no5_time == -1) {
    no5_time = 70 + Math.floor(Math.random() * 51);
  }

  if (time > 0) {
    setTimeout("whack_it()", 50);
  } else {
    clearTimeout("whack_it()");
    $("#no1").fadeOut(500);
    $("#no2").fadeOut(500);
    $("#no3").fadeOut(500);
    $("#no4").fadeOut(500);
    $("#no5").fadeOut(500);
  }
}

$("#no1").click(function () {
  if (game && no1_time > 0) {
    score_plus_one();
    no1_time = 0;
  }
});
$("#no2").click(function () {
  if (game && no2_time > 0) {
    score_plus_one();
    no2_time = 0;
  }
});
$("#no3").click(function () {
  if (game && no3_time > 0) {
    score_plus_one();
    no3_time = 0;
  }
});
$("#no4").click(function () {
  if (game && no4_time > 0) {
    score_plus_one();
    no4_time = 0;
  }
});
$("#no5").click(function () {
  if (game && no5_time > 0) {
    score_plus_one();
    no5_time = 0;
  }
});

function score_plus_one() {
  score += 1;
}
function time_minus_one() {
  time -= 1;
  if (time > 10) {
    document.getElementById("countdown").textContent = "";
  } else {
    document.getElementById("countdown").textContent = time;
  }
  if (time > 0) {
    setTimeout("time_minus_one()", 1000);
  } else {
    //タイムアップ
    document.getElementById("countdown").textContent = "TIME UP!";
    game = !game;
    clearTimeout("time_minus_one()");
    game_over();
  }
}

function game_over() {
  //ハイスコア更新
  if (score > high_score) {
    high_score = score;
    document.getElementById("hi").textContent = ("000" + high_score).slice(-3);
    if (mode == "A") {
      A_high = high_score;
      document.getElementById("thirty").value = "30秒 (Best: " + A_high + ")";
    } else if (mode == "B") {
      B_high = high_score;
      document.getElementById("fifty").value = "50秒 (Best: " + B_high + ")";
    } else if (mode == "C") {
      C_high = high_score;
      document.getElementById("hundred").value = "100秒 (Best: " + C_high + ")";
    }
  }
}
