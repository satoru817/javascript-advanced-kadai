let untyped = '';
let typed='';
let score = 0;

const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const start = document.getElementById('start');
const count = document.getElementById('count');
const typecount = document.getElementById('typecount');

const textLists = [
  'Hello World','This is my App','How are you?',
  'Today is sunny','I love JavaScript!','Good morning',
  'I am Japanese','Let it be','Samurai',
  'Typing Game','Information Technology',
  'I want to be a programmer','What day is today?',
  'I want to build a web app','Nice to meet you',
  'Chrome Firefox Edge Safari','machine learning',
  'Brendan Eich','John Resig','React Vue Angular',
  'Netscape Communications','undefined null NaN',
  'Thank you very much','Google Apple Facebook Amazon',
  'ECMAScript','console.log','for while if switch',
  'var let const','Windows Mac Linux iOS Android',
  'programming'
];
  


function createText(){
  //正タイプした文字列をクリアして、空文字列を再代入
  typed='';
  typedfield.textContent = typed;


  let random = Math.floor(Math.random()*textLists.length);
  untyped = textLists[random];
  untypedfield.textContent = untyped;
}
// createText();

function keyPress(e){//別にこれはeである必要はない。イベントオブジェクトは慣例でeで受けるだけ
    // console.log(e.key);

    //誤タイプ時
    if(e.key !== untyped.substring(0,1)){
      wrap.classList.add('mistyped');
      setTimeout(()=>{
        wrap.classList.remove('mistyped');
      },100);
      return;
    }

    //正タイプの場合
    score++;
    typecount.textContent++;
    wrap.classList.remove('mistyped');
    typed += untyped.substring(0,1);
    //substring(開始インデックス,終了インデックス);で開始インデックスと終了インデックスに挟まれた文字列を取得
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;

    //テキストがなくなったら新しいテキストを表示
    if(untyped === ''){
      createText();
    }
}

function rankCheck(score){


  let text = '';

  if(score < 100){
    text = `あなたのランクはCです。\nBランクまであと${100-score}文字です。`;
  }

  else if(score < 200){
    text = `あなたのランクはBです。\nAランクまであと${200-score}文字です。`;
  }

  else if(score <300){
    text = `あなたのランクはAです。\nSランクまであと${300-score}文字です。`;
  }

  else{
    text = `あなたのランクはSです。\nおめでとうございます!`;
  }

  return `${score}文字打てました\n${text}\n【OK】リトライ/【キャンセル】終了}`;
}


// function timer(){
//   let time = count.textContent;

//   const id = setInterval(()=>{

//     time--;
//     count.textContent = time;

//     if(time <= 0){
//       clearInterval(id);
//     }
//   },1000);
// };

// const timer = () =>{
//   let time = count.textContent;

//   const id = setInterval(()=>{

//     time--;
//     count.textContent = time;

//     if(timer <= 0){
//       clearInterval(id);
//     }
//   },1000);
// };


//上手く行かないコード（自分で作った。）
// function timer(){
//   let time = count.textContent;

//   const id = setInterval(subtraction,1000);
// }

// function subtraction(){
//   if(time<=0){
//     clearInterval(id);
//   }else{
//     time--;
//   }



// function timer(){
//   //無名関数にすることによってidを関数に渡せる！
//   const id = setInterval(function(){subtraction(id)},1000);
// }

// function subtraction(id){
//   if(count.textContent<=0){
//     gameOver(id);
//   }else{
//     count.textContent--;
//   }
//  }

//  function gameOver(id){
//   clearInterval(id);

//   console.log("ゲーム終了");
//  }

// ずっと9が表示される
//  function timer(){
//   let time = parseInt(count.textContent); // count.textContentが文字列の場合、数値に変換する必要があります。

//   // setIntervalに引数を渡すために、無名関数を使用します。
//   const id = setInterval(function(){
//     subtraction(time, id);
//   }, 1000);
// }

// function subtraction(time, id){
//   if(time <= 0){
//     clearInterval(id);
//   }else{
//     time--;
//     console.log(time); // デバッグのために現在のtimeを表示

//     // count.textContentを更新します。
//     count.textContent = time;

//   }
// }


//subtraction関数をtimer関数の内部で定義し、
//time変数とidをクロージャとして閉じ込めることで問題を解消します。
//この方法で、subtraction関数はtimeとidを正しく参照できます。
// function timer(){
//   let time = parseInt(count.textContent);
//   const id = setInterval(function(){
//     subtraction();
//   }, 1000);

//   function subtraction(){
//     if(time <= 0){
//       clearInterval(id);
//     }else{
//       time--;
//       console.log(time); // デバッグのために現在のtimeを表示
//       count.textContent = time;
//     }
//   }

// }




// function timer(){
//   let time = count.textContent;

//   const id = setInterval(function(){
//     let time = count.textContent;
  
//     time--;
  
//     count.textContent = time;
  
//     if(time<=0){
//       clearInterval(id);
//     }
//   },1000);
  
// };



// document.addEventListener('keypress',keyPress);
//keyが押されると、keyPress関数にeventを渡しkeyPress関数が実行される。

// 「スタート」ボタンをクリックしたらタイマーを開始する
// タイマー部分のHTML要素（p要素）を取得する
// setInterval()メソッドで1000ミリ秒（1秒）間隔の処理を作成する
// タイマー部分のHTML要素（p要素）の値を1ずつ減らす
// タイマーが0以下になったらclearInterval()メソッドで停止する


function timer(){
  const id = setInterval(function(){subtraction(id)},1000);
};

function subtraction(id){
  if(count.textContent<=0){
    gameOver(id);
  }else{
    count.textContent--;
  }
};

function gameOver(id){
  clearInterval(id);
  console.log("ゲーム終了!");

  const result = confirm(rankCheck(score));

  if(result == true){
    window.location.reload();
  }
};

start.addEventListener('click',()=>{

  timer();

  //untypedにランダムなテキストが入る
  createText();

  //startのcssのstyle属性がnoneに変更
  start.style.display = 'none';

  //スタートした後にのみキーを押すとkeyPress関数が呼ばれるようになった。
  document.addEventListener('keypress',keyPress);
})

untypedfield.textContent='スタートボタンで開始';


