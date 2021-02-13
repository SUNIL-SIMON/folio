
var timer1_cal1;
var timer2_cal1;
var timer1Open = 0;
var timer2Open = 0;
var cnt1 = 0;
var cnt2 = 0;
var isON = 0;
var isimagecorrected = 0
var myVar1;
var myVar2;
var myVar3;
var myVar4;
var myVar5;
var manual = 1;
var srcArrayT1 =["SI_tr2.jpg","SI_tr1.jpg","SI_tr3.jpg","SI_trr4.jpg","SI_tr5.jpg"];
var srcArrayT2 =["SI_ta1.jpg","SI_ta2.jpg","SI_ta3.jpg","SI_ta4.jpg","SI_ta5.jpg"];
var srcArrayT3 =["SI_td1.jpg","SI_td2.jpg","SI_td1.jpg","SI_td2.jpg","SI_td1.jpg"];

document.getElementById("defaultOpen").click();

resizedWindow();
restoreOpacity();
restoreColors();

function resizedWindow() {
  var w = window.outerWidth;
  var h = window.outerHeight;

  resizeFUN_TECH_views(w);
  resizeImageFlyers(w);
  resizeBottomCards(w);
  resizeTabs(w);

  var wdt7 = ((w * 0.14) * 3) + "px";
 document.getElementById("about_content1").style.height = wdt7;
}
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
function resizeFUN_TECH_views(width) {
  var wdt =  (width * 0.023) + "px";
  document.getElementById("fun").style.fontSize = wdt;
  document.getElementById("techi").style.fontSize = wdt;
}
function resizeImageFlyers(width)
{
  var wdt =  (width * 0.14) + "px";

  document.getElementById("floatingbtn1").style.width = wdt;
  document.getElementById("floatingbtn1").style.height = wdt;
  document.getElementById("floatingbtn2").style.width = wdt;
  document.getElementById("floatingbtn2").style.height = wdt;
  document.getElementById("floatingbtn3").style.width = wdt;
  document.getElementById("floatingbtn3").style.height = wdt;
  document.getElementById("floatingbtn4").style.width = wdt;
  document.getElementById("floatingbtn4").style.height = wdt;
  document.getElementById("floatingbtn5").style.width = wdt;
  document.getElementById("floatingbtn5").style.height = wdt;
  document.getElementById("floatingbtn6").style.width = wdt;
  document.getElementById("floatingbtn6").style.height = wdt;
  document.getElementById("image").style.width = wdt;
  document.getElementById("image").style.height = wdt;

  var wdt2 =  (width * 0.08) + "px" + " " + "0px";
  document.getElementById("aboutC1").style.padding = wdt2;
  var wdt3 =  (width * 0.09) + "px"
  document.getElementById("imagecontainer").style.top = wdt3;
}
function resizeBottomCards(width)
{
  var wdt =  (width * 0.34) + "px"
  document.getElementById("vcard1").style.height = wdt;
  document.getElementById("vcard2").style.height = wdt;
  document.getElementById("vcard3").style.height = wdt;
}
function resizeTabs(width)
{
  if(width < 500){
	document.getElementById("defaultOpen").style.fontSize = "10px";
	document.getElementById("tab2").style.fontSize = "10px";
  }
  else if(width < 1000){
	document.getElementById("defaultOpen").style.fontSize = "15px";
	document.getElementById("tab2").style.fontSize = "15px";
  }
  else
  {
	document.getElementById("defaultOpen").style.fontSize = "20px";
	document.getElementById("tab2").style.fontSize = "20px";
  }
}
function restoreOpacity(){
  document.getElementById("techi").style.opacity = 1;
  document.getElementById("fun").style.opacity = 1;

  document.getElementById("floatingbtn1").style.opacity = 0;
  document.getElementById("floatingbtn2").style.opacity = 0;
  document.getElementById("floatingbtn3").style.opacity = 0;
  document.getElementById("floatingbtn4").style.opacity = 0;
  document.getElementById("floatingbtn5").style.opacity = 0;
  document.getElementById("floatingbtn6").style.opacity = 0;
  document.getElementById("image").style.opacity = 0;
}
function restoreColors(){
 document.getElementById("about_content1").style.backgroundImage = "linear-gradient(to right, #1f1c18 40%,#8e0e00cc)";
}





function moveTechiFunction() {
  manual = 0;
  moveTechiFunctionManual();
}

function moveTechiFunctionManual() {
  var w = window.outerWidth;

  document.getElementById("fun").style.opacity = 0;
  document.getElementById("floatingbtn1").style.opacity = 1;
  document.getElementById("floatingbtn2").style.opacity = 1;
  document.getElementById("floatingbtn4").style.opacity = 1;
  document.getElementById("floatingbtn5").style.opacity = 1;
  document.getElementById("floatingbtn3").style.opacity = 1;
  document.getElementById("floatingbtn6").style.opacity = 1;

  document.getElementById("floatingbtn1").style.transform = "translate(-145%, -50.5%)";
  document.getElementById("floatingbtn2").style.transform = "translate(-145%, 60%)";
  document.getElementById("floatingbtn3").style.transform = "translate(-50%, 44.2%)";
  document.getElementById("floatingbtn4").style.transform = "translate(-145%, -144.2%)";
  document.getElementById("floatingbtn5").style.transform = "translate(-50%, -160%)";

  var wdt = (w * 0.155) + "px";
  document.getElementById("floatingbtn3").style.height = wdt;
  document.getElementById("floatingbtn4").style.height = wdt;
  var wdt2 = (w * 0.025) + "px";
  
  document.getElementById("floatingbtn3").style.borderBottomRightRadius= wdt2;
  document.getElementById("floatingbtn2").style.borderBottomLeftRadius= wdt2;
  document.getElementById("floatingbtn2").style.borderTopLeftRadius= "0px";
  document.getElementById("floatingbtn1").style.borderBottomLeftRadius= wdt2;
  document.getElementById("floatingbtn4").style.borderTopLeftRadius= wdt2;
  document.getElementById("floatingbtn5").style.borderTopRightRadius= wdt2;
  document.getElementById("floatingbtn5").style.borderBottomRightRadius= wdt2;

  document.getElementById("floatingbtn6"). style.borderTopRightRadius = wdt2;
  document.getElementById("image"). style.borderTopRightRadius = wdt2;

  var wdt3 = (((w * 0.14) * .05)) + "px";
  document.getElementById("img1").style.left = wdt3;
  document.getElementById("img2").style.left = wdt3;
  document.getElementById("img4").style.left = wdt3;
  document.getElementById("img6").style.left = wdt3;
  
  var wdt4 = (((w * 0.14) * 1.85)) + "px";
  document.getElementById("img1").style.width = wdt4;
  document.getElementById("img2").style.width = wdt4;
  document.getElementById("img4").style.width = wdt4;
  document.getElementById("img6").style.width = wdt4;

  var wdt5 = (((w * 0.14) * 0.75)) + "px";
  document.getElementById("img1").style.height = wdt5;
  document.getElementById("img2").style.height = wdt5;
  document.getElementById("img4").style.height = wdt5;
  document.getElementById("img6").style.height = wdt5;

  var wdt6 = (((w * 0.14) * .10)) + "px";
  document.getElementById("img1").style.top = wdt6;
  document.getElementById("img2").style.top = wdt6;
  document.getElementById("img4").style.top = wdt6;
  document.getElementById("img6").style.top = wdt6;

  document.getElementById("img6").style.opacity = "0";
  document.getElementById("img1").style.opacity = "1";
  document.getElementById("floatingbtn6").style.zIndex = "1";
  document.getElementById("floatingbtn1").style.zIndex = "2";

 clearInterval(timer2_cal1);
 timer2Open = 0;
   if(timer1Open == 0){
    timer1Open = 1;
    changeTechImages();
    timer1_cal1 = setInterval(changeTechImages, 1600);
   }

}
function changeTechImages()
{
  if(cnt1 <= 4){
    document.getElementById("img1").src = srcArrayT1[cnt1];
    document.getElementById("img2").src = srcArrayT2[cnt1];
    document.getElementById("img4").src = srcArrayT3[cnt1];
    cnt1 = cnt1 + 1;
  }
  if(cnt1 > 4){
    cnt1 = 0;
  }
}
function awayTechiFunction() {
  clearInterval(timer1_cal1);
   timer1Open = 0;
  restorePos();
}



function moveFunFunction() {
  manual = 0;
  moveFunFunctionManual();
}
function moveFunFunctionManual() {

var w = window.outerWidth;

  document.getElementById("techi").style.opacity = 0;
  document.getElementById("floatingbtn1").style.opacity = 1;
  document.getElementById("floatingbtn2").style.opacity = 1;
  document.getElementById("floatingbtn4").style.opacity = 1;
  document.getElementById("floatingbtn5").style.opacity = 1;
  document.getElementById("floatingbtn3").style.opacity = 1;
  document.getElementById("floatingbtn6").style.opacity = 1;

  document.getElementById("floatingbtn1").style.transform = "translate(45.5%, -50%)";
  document.getElementById("floatingbtn2").style.transform = "translate(-50%, 60%)";
  document.getElementById("floatingbtn3").style.transform = "translate(45%, 44.5%)";
  document.getElementById("floatingbtn4").style.transform = "translate(-50%, -144.5%)";
  document.getElementById("floatingbtn5").style.transform = "translate(45%, -160%)";

  var wdt = (w * 0.155) + "px";
  document.getElementById("floatingbtn3").style.height = wdt;
  document.getElementById("floatingbtn4").style.height = wdt;
  var wdt2 = (w * 0.025) + "px";

  document.getElementById("floatingbtn2").style.borderBottomLeftRadius= wdt2;
  document.getElementById("floatingbtn3").style.borderBottomRightRadius= wdt2;
  document.getElementById("floatingbtn1").style.borderTopRightRadius= wdt2;
  document.getElementById("floatingbtn4").style.borderTopLeftRadius= wdt2;
  document.getElementById("floatingbtn5").style.borderBottomRightRadius= wdt2;
  document.getElementById("floatingbtn5").style.borderTopRightRadius= wdt2;

  document.getElementById("floatingbtn6"). style.borderBottomLeftRadius = wdt2;
  document.getElementById("image"). style.borderBottomLeftRadius = wdt2;



  var wdt3 = (((w * 0.14) * .05)) + "px";
  document.getElementById("img1").style.left = wdt3;
  document.getElementById("img2").style.left = wdt3;
  document.getElementById("img4").style.left = wdt3;
  document.getElementById("img6").style.left = wdt3;
  
  var wdt4 = (((w * 0.14) * 1.85)) + "px";
  document.getElementById("img1").style.width = wdt4;
  document.getElementById("img2").style.width = wdt4;
  document.getElementById("img4").style.width = wdt4;
  document.getElementById("img6").style.width = wdt4;

  var wdt5 = (((w * 0.14) * 0.75)) + "px";
  document.getElementById("img1").style.height = wdt5;
  document.getElementById("img2").style.height = wdt5;
  document.getElementById("img4").style.height = wdt5;
  document.getElementById("img6").style.height = wdt5;

  var wdt6 = (((w * 0.14) * .10)) + "px";
  document.getElementById("img1").style.top = wdt6;
  document.getElementById("img2").style.top = wdt6;
  document.getElementById("img4").style.top = wdt6;
  document.getElementById("img6").style.top = wdt6;

  document.getElementById("img6").style.opacity = "1";
  document.getElementById("img1").style.opacity = "0";
  document.getElementById("floatingbtn6").style.zIndex = "2";
  document.getElementById("floatingbtn1").style.zIndex = "1";

 clearInterval(timer1_cal1);
 timer1Open = 0;
 if(timer2Open == 0){
    timer2Open = 1;
    changeFunImages();
    timer2_cal1 = setInterval(changeFunImages, 1600);
   }
}
function changeFunImages()
{
  if(cnt2 <= 2){
    document.getElementById("img1").src= srcArray[cnt2];
    cnt2 = cnt2 + 1;
  }
  if(cnt2 > 2){
    cnt2 = 0;
  }
}
function awayFunFunction() {
 document.getElementById("img1").style.left = "-50px";
  restorePos();
}






function restorePos(){
  document.getElementById("techi").style.opacity = 1;
  document.getElementById("fun").style.opacity = 1;

  document.getElementById("floatingbtn1").style.opacity = 0;
  document.getElementById("floatingbtn2").style.opacity = 0;
  document.getElementById("floatingbtn3").style.opacity = 0;
  document.getElementById("floatingbtn4").style.opacity = 0;
  document.getElementById("floatingbtn5").style.opacity = 0;
  document.getElementById("image").style.opacity = 0;
  document.getElementById("floatingbtn6").style.opacity = 0;

  document.getElementById("floatingbtn1").style.transform = "translate(-50%, -50%)";
  document.getElementById("floatingbtn2").style.transform = "translate(-50%, -50%)";
  document.getElementById("floatingbtn3").style.transform = "translate(-50%, -50%)";
  document.getElementById("floatingbtn4").style.transform = "translate(-50%, -50%)";
  document.getElementById("floatingbtn5").style.transform = "translate(-50%, -50%)";


  document.getElementById("img1").style.left = "20px";
  document.getElementById("img2").style.left = "20px";
  document.getElementById("img4").style.left = "20px";
  document.getElementById("img6").style.opacity = "0";
  document.getElementById("img1").style.opacity = "0";

   document.getElementById("floatingbtn2").style.borderBottomLeftRadius= "0px";
  document.getElementById("floatingbtn2").style.borderTopLeftRadius= "0px";
  document.getElementById("floatingbtn3").style.borderBottomRightRadius= "0px";
  document.getElementById("floatingbtn1").style.borderTopRightRadius= "0px";
  document.getElementById("floatingbtn4").style.borderTopLeftRadius= "0px";
  document.getElementById("floatingbtn5").style.borderBottomRightRadius= "0px";
  document.getElementById("floatingbtn5").style.borderTopRightRadius= "0px";

  document.getElementById("floatingbtn6"). style.borderBottomLeftRadius = "0px";
  document.getElementById("image"). style.borderBottomLeftRadius = "0px";

  document.getElementById("floatingbtn1").style.borderBottomLeftRadius= "0px";
  document.getElementById("floatingbtn6"). style.borderTopRightRadius = "0px";
  document.getElementById("image"). style.borderTopRightRadius = "0px";

  document.getElementById("c1").style.backgroundImage = "linear-gradient(to right, #1f1c18 40%,#8e0e00cc)";


  clearInterval(timer2_cal1);
  timer2Open = 0;

  isON = 0;
 
  
}
function  openLinkedin()
{
  window.open("https://www.linkedin.com/in/sunil-simon-9146391b9/", "_blank"); 
}
function openFacebook()
{
 window.open("https://www.facebook.com/sunil.s.balraj", "_blank"); 
}
function openInstagram()
{
 window.open("https://www.instagram.com/sunil_simon8471/", "_blank"); 
}
function openYoutube()
{
}

