// 1	タイマーが0になったら「タイムアップ！」と表示されている
// 2	「タイムアップ」を表示するコードにsetTimeoutが使用されていること
// ※setTimeoutは少しの時間（10ミリ秒）経過後（タイムアップ！が表示された後）に結果を表示させるために使用する

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




function timer(){
  const id = setInterval(function(){subtraction(id)},1000);
};

function subtraction(id){
  if(count.textContent<=0){
    untypedfield.textContent = 'タイムアップ!';
    console.log(`timeup`);
    typedfield.textContent = '';
    setTimeout(function(){gameOver(id)},10);
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


