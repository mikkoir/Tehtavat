const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for(i = 0; i<kuvat.length; i++){
  let li = document.createElement('li');
  //let img = document.createElement('img');
  let ul = document.getElementsByTagName('ul')[0];
  li.innerHTML='<img src="'+kuvat[i]+'">';

  ul.append(li);
}

document.getElementsByTagName('li').style.listStyleType = '0';