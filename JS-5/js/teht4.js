const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];


for(i = 0; i<kuvat.length; i++){
  const li = document.createElement('li');
  const k = document.createElement('img');
  const ul = document.getElementsByTagName('ul')[0];
  k.src = kuvat[i];
  k.alt = 'kissa';

  li.appendChild(k);
  ul.appendChild(li);

}
