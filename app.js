var menu = document.getElementById('menu');
var side = document.getElementById('aside');
let sideFull = document.getElementById('complete_side');
const homeButton = document.getElementById('home_button');
var vsCode = document.getElementById('vs_code-screen');
var vsApp = document.getElementById('vs_code');
var dialer = document.getElementById('dialer');
var callDailer = document.getElementById('call_dial');
menu.addEventListener('click', menuPress);
function menuPress(){
    side.style.display = "block";
    sideFull.style.display = "block";
}
// $('#menu').click(function() {
//     $('.menu').toggleClass('show');
//   });
homeButton.addEventListener('click', buttonClick);
function buttonClick(){
    side.style.display= "none";
    sideFull.style.display = "none";
    vsCode.style.display = "none";
    callDailer.style.display = "none";

}
dialer.addEventListener('click', opDialer);
function opDialer(){
    callDailer.style.display = "block";
}
menu.ondblclick = function(){expand()};
function expand(){

}
vsApp.addEventListener('click', op);
function op(){
    vsCode.style.display ="flex";
}