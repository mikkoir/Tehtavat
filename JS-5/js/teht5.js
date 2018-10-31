
setInterval(timer, 1000);

function timer() {
  let d = new Date();
  let h = nolla(d.getHours());
  let m = nolla(d.getMinutes());
  let s = nolla(d.getSeconds());
  document.getElementById('kello').innerHTML = h +":"+m+":"+s;
}

function nolla(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
