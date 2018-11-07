
//document.getElementById('kuva').onmouseenter = function() {nayta()};
//document.getElementById('kuva').onmouseleave = function () {piilo()};
document.getElementById('kuva').addEventListener("mouseover",nayta);
document.getElementById('kuva').addEventListener("mouseout",piilo);


function nayta(){
  document.getElementsByTagName('p')[0].style.opacity = '100';
}

function piilo(){
  document.getElementsByTagName('p')[0].style.opacity = '0';
}
