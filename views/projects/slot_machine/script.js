"use strict";

var div1 = document.getElementById("num1");
var div2 = document.getElementById("num2");
var div3 = document.getElementById("num3");
var a = 0;
var b = 0;
var c = 0;
var coins = 10;
var count = 250;
var bonusCoin = 0;
var timer;
var starting = false;

function slot() {
  document.getElementById("bonus").textContent =
    "📀×" + ("00" + coins).slice(-2);
  count = count - 1;
  a = Math.floor(Math.random() * 9) + 1;
  b = Math.floor(Math.random() * 9) + 1;
  c = Math.floor(Math.random() * 9) + 1;
  if (count > 50 && a == 7) {
    div1.innerHTML = "<div class='lucky-seven'>" + a + "</div>";
  } else {
    if (count > 50) div1.textContent = a;
  }
  if (count > 0 && b == 7) {
    div2.innerHTML = "<div class='lucky-seven'>" + b + "</div>";
  } else {
    if (count > 0) div2.textContent = b;
  }
  if (count > 25 && c == 7) {
    div3.innerHTML = "<div class='lucky-seven'>" + c + "</div>";
  } else {
    if (count > 25) div3.textContent = c;
  }
  timer = setTimeout("slot()", 10);

  if (
    count <= 0 &&
    div1.textContent == 7 &&
    div2.textContent == 7 &&
    div3.textContent == 7
  ) {
    //ラッキーセブンの処理
    bonusCoin = 77;
    bonus();
  } else if (
    count <= 0 &&
    div1.textContent == div2.textContent &&
    div2.textContent == div3.textContent
  ) {
    //３つそろった時の処理
    bonusCoin = 20;
    bonus();
  } else if (
    (count <= 0 && div1.textContent == div2.textContent) ||
    (count <= 0 && div2.textContent == div3.textContent)
  ) {
    //２つそろった時の処理
    bonusCoin = 5;
    bonus();
  }
  if (count <= 0) {
    clearTimeout(timer);
    if (coins <= 0) {
      //ゲームオーバー
      document.getElementById("sBtn").value = "GAME OVER";
    } else {
      //再スタート
      document.getElementById("sBtn").value = "START";
    }
    if (count == 0) {
      starting = !starting;
    }
  }
}
function start() {
  starting = !starting;
  if (starting) {
    if (coins > 0) {
      //スタート処理
      coins = coins - 1;
      count = 250;
      slot();
      document.getElementById("sBtn").value = "STOP";
    } else {
      //ゲームオーバー時の処理
      alert("もう一度やりたい時は再読み込みしてください！");
    }
  } else {
    count = -1;
  }
}
function bonus() {
  //ボーナス
  if (div1.textContent == 7 && div2.textContent == 7 && div3.textContent == 7) {
    //ラッキーセブンの処理
    document.getElementById("bonus").textContent = "ﾗｯｷｰｾﾌﾞﾝ！📀+" + bonusCoin;
  } else {
    document.getElementById("bonus").textContent = "ボーナス！📀+" + bonusCoin;
  }
  coins += bonusCoin;
  //上限の設定
  if (coins > 99) coins = 99;
}
