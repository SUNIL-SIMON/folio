
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

function resizedWindow() {

  var w = window.outerWidth;
  var h = window.outerHeight;

  resizeFUN_TECH_views(w);
  resizeBottomCards(w);
  resizeTabs(w);

  var wdt7 =  (w * 0.35) + "px";
  document.getElementById("content1").style.height = wdt7;
  document.getElementById("aboutC1").style.height = wdt7;
  document.getElementById("fun").style.height = wdt7;
  document.getElementById("techi").style.height = wdt7;
  document.getElementById("imagecontainer").style.height = wdt7;


 
  
}
function openTab2(evt) {

    document.getElementById("content1").style.display = "block";
    document.getElementById("content2_1").style.display = "block";
    document.getElementById("content2_2").style.display = "block";
    document.getElementById("content3").style.display = "block";
    document.getElementById("content4").style.display = "block";
    document.getElementById("toptab2").style.display = "none";
    document.getElementById("toptab1").style.display = "block";
    openTab(evt);
}
function openTab1(evt) {

    document.getElementById("content1").style.display = "none";
    document.getElementById("content2_1").style.display = "none";
    document.getElementById("content2_2").style.display = "none";
    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "none";
    document.getElementById("toptab2").style.display = "block";
    document.getElementById("toptab1").style.display = "none";
    openTab(evt);
}
function openTab(evt) {
  var i, tablinks;
  tablinks = document.getElementsByClassName("tab button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}
function resizeTabs(width)
{
  if(width < 500){
	document.getElementById("defaultOpen").style.fontSize = "13px";
	document.getElementById("tab2").style.fontSize = "13px";
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
function resizeFUN_TECH_views(width) {
  var wdt =  (width * 0.023) + "px";
  document.getElementById("fun").style.fontSize = wdt;
  document.getElementById("techi").style.fontSize = wdt;
}
function resizeBottomCards(width)
{
  var wdt =  (width * 0.34) + "px";
  document.getElementById("vcard1").style.height = wdt;
  document.getElementById("vcard2").style.height = wdt;
  document.getElementById("vcard3").style.height = wdt;

  document.getElementById("vcard4").style.height = wdt;
  document.getElementById("vcard5").style.height = wdt;
  document.getElementById("vcard6").style.height = wdt;

  document.getElementById("vcard7").style.height = wdt;
  document.getElementById("vcard8").style.height = wdt;
  document.getElementById("vcard9").style.height = wdt;
  
  var wdt2 =  (width * 0.03) + "px";
  document.getElementById("floatingbtn4st2").style.fontSize = wdt2;
  document.getElementById("floatingbtn4st1").style.fontSize = wdt2;

  var wdt4 =  (width * 0.018) + "px";
  document.getElementById("skill").style.fontSize = wdt4;

  var wdt3 =  (width * 0.028) + "px";
  document.getElementById("skilld").style.fontSize = wdt3;
  document.getElementById("social6").style.fontSize = wdt3;
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
function openGit()
{
 window.open("https://github.com/SUNIL-SIMON", "_blank"); 
}
function openYoutube()
{
}
function openWorkLocation()
{
  window.open("https://www.google.com/maps/place/Zoho+Corporation/@12.8312294,80.0471839,17z/data=!3m1!4b1!4m5!3m4!1s0x3a5260db1ff54b03:0xa8af6b8bb6419d6f!8m2!3d12.8312242!4d80.0493726", "_blank"); 
}
function openPublication()
{
  window.open("https://www.researchgate.net/publication/301719120_Energy_Conservation_Using_Dynamic_Voltage_Frequency_Scaling_for_Computational_Cloud", "_blank"); 
}

function openWorkSite()
{
  window.open("https://www.zoho.com", "_blank"); 
}



