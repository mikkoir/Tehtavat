const pics = [
  {
    thumb: 'http://www.fillmurray.com/100/100',
    big: 'http://www.fillmurray.com/640/480',
  },
  {
    thumb: 'http://lorempixel.com/100/100/sports/1/',
    big: 'http://lorempixel.com//640/480/sports/1/',
  },
  {
    thumb: 'https://placeimg.com/100/100/tech',
    big: 'https://placeimg.com/640/480/tech',
  },
];


for(let i = 0; i<pics.length; i++){
  let li = document.createElement('li');
  let k = document.createElement('img');
  let body = document.getElementsByTagName('body')[0];
  k.src = pics[i].thumb;
  li.appendChild(k);
  body.insertBefore(li, body.firstChild);
}

document.getElementsByTagName('li')[2].addEventListener("click",nayta1);
document.getElementsByTagName('li')[1].addEventListener("click",nayta2);
document.getElementsByTagName('li')[0].addEventListener("click",nayta3);
document.querySelector("div").addEventListener("click",piilo);


function nayta1(){
  document.getElementsByTagName('img')[3].src = pics[0].big;


}
function nayta2(){
  document.getElementsByTagName('img')[3].src = pics[1].big;
}
function nayta3(){
  document.getElementsByTagName('img')[3].src = pics[2].big;
}

function piilo() {
  document.getElementsByTagName('img')[3].src='';

}

