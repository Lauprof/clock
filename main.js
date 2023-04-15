function clock(){

let months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec'];


let yr = document.getElementById('year');
let mth = document.getElementById('month');
let hr= document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');


let date1 = new Date();

yr.innerHTML = date1.getFullYear();
mth.innerHTML = months[date1.getUTCMonth()];


if(date1.getSeconds() <= 9){
sec.innerHTML = "0"+ date1.getSeconds() + '<sub>s</sub>';
}
else{
  sec.innerHTML = date1.getSeconds() + '<sub>s</sub>';
}

if(date1.getHours() <= 9){
  
hr.innerHTML = "0" + date1.getHours() + '<sub> h</sub>';
}
else{
  hr.innerHTML = date1.getHours() + "<sub> h</sub>";
}
if (date1.getMinutes()<= 9) {
  min.innerHTML = '0' + date1.getMinutes() + '<sub> m</sub>';

}
else {
  min.innerHTML = date1.getMinutes() + '<sub> m</sub>';

}
}
setInterval(clock,1000);