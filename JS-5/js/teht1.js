document.getElementsByTagName('td')[0].innerHTML ='<td>Mikko</td>';
document.getElementsByTagName('td')[1].innerHTML ='<td>Romppanen</td>';
document.getElementsByTagName('td')[2].innerHTML ='<td>rompsq</td>';
document.getElementsByTagName('td')[3].innerHTML ='<td>Niittyportinpolku 4 B 14. 02200 Espoo</td>';


let tr = document.getElementsByTagName('tr')[0];
let th = document.createElement('th');
th.innerHTML='<th>Puh</th>';
tr.append(th);


let element = document.getElementsByTagName("tr")[1];
let td = document.createElement('td');
td.innerHTML='<td>0400428094</td>';
element.append(td);


let parent = document.getElementsByTagName('tr')[0];
let child = document.getElementsByTagName('th')[2];
parent.removeChild(child);


let nik = document.getElementsByTagName('tr')[1];
let nikk = document.getElementsByTagName('td')[2];
nik.removeChild(nikk);