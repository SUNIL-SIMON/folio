
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

var load = 0;

var opacity = 0;

defaultopener();
resizedWindow();


function resizedWindow(){
  
  var w = window.outerWidth;
  var h = window.outerHeight;

  resizeFUN_TECH_views(w);
  
  resizeBottomCards(w);
  
  resizeTabs(w);
  
  resizeSocialMedia(w);
  
  

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  var wdt7 =  (w * 0.42) + "px";
  document.getElementById("content1").style.height = wdt7;
  // document.getElementById("aboutC1").style.height = wdt7;
  document.getElementById("fun").style.height = wdt7;
  document.getElementById("techi").style.height = wdt7;
  // document.getElementById("imagecontainer").style.height = wdt7;

 

  var wdt8 =  (w * 0.15) + "px";
  document.getElementById("skillContent").style.height = wdt8;
    document.getElementById("skilll").style.height = wdt8;
  document.getElementById("skill").style.height = wdt8;



  var wdt9 =  (w * 0.1) + "px";
  var wdt10 =  (w * 0.4) + "px";
  document.getElementById("imagecontainer1").style.height = wdt9;
  document.getElementById("imagecontainer1").style.width = wdt10;

  // var wdt10 =  (w * 0.4) + "px";
  // document.getElementById("toptab1").style.paddingTop = "115px";
  
  // console.log({ toph, toph });
}
function defaultopener()
{
	if(localStorage.getItem("tabid") == "contact")
	{
		document.getElementById("contact").click();
	}
	else if(localStorage.getItem("tabid") == "adaptability")
	{
		document.getElementById("adaptability").click();
	}
  else if(localStorage.getItem("tabid") == "projects")
	{
		document.getElementById("projects").click();
	}
  else if(localStorage.getItem("tabid") == "publication")
	{
		document.getElementById("publication").click();
	}
	else
	{
		document.getElementById("defaultOpen").click();
	}
  // document.getElementById("techi").style.animationDelay = "1s";
  // document.getElementById("techi").onmouseover();
}
function openTab1(evt) {
  localStorage.setItem("tabid", "about");
  document.getElementById("toptab3").scrollIntoView({paddingTop : "200px", behavior: 'smooth'});
  openTab(evt);
}
function openTab2(evt) {
  localStorage.setItem("tabid", "about");
  document.getElementById("toptab2").scrollIntoView({paddingTop : "200px", behavior: 'smooth'});
  openTab(evt);
}
function openTab3(evt) {
  localStorage.setItem("tabid", "about");
  document.getElementById("content2_1").scrollIntoView({paddingTop : "200px", behavior: 'smooth'});
  openTab(evt);
}
function openTab4(evt) {
  localStorage.setItem("tabid", "about");
  document.getElementById("toptab1").scrollIntoView({paddingTop : "200px", behavior: 'smooth'});
  openTab(evt);
}
function openTab5(evt) {
  localStorage.setItem("tabid", "about");
  document.getElementById("content3").scrollIntoView({ paddingTop : "200px",behavior: 'smooth'});
  openTab(evt);
}
// function openTab4(evt) {
// 	localStorage.setItem("tabid", "about");
//   document.getElementById("toptab3").scrollIntoView();
//   //    document.getElementById("content1").style.display = "block";
//   //   		document.getElementById("content2_1").style.display = "block";
//   //   		document.getElementById("content2_2").style.display = "block";
//   //   		document.getElementById("content3").style.display = "block";
//   //   		document.getElementById("content4").style.display = "none";
//   //   		document.getElementById("content5").style.display = "none";
//   //   		document.getElementById("toptab1").style.display = "block";
// 	// 	document.getElementById("toptab2").style.display = "none";
//  	// 	document.getElementById("toptab3").style.display = "none";
//     		openTab(evt);

// }
// function openTab2(evt) {
//   localStorage.setItem("tabid", "adaptability");
//   document.getElementById("toptab2").scrollIntoView();
//   // document.getElementsByTagName('toptab3').scrollIntoView();
// 	// 
//   // document.getElementsByTagName('toptab3').scrollIntoView();
//   //       document.getElementById("content1").style.display = "block";
//   //   		document.getElementById("content2_1").style.display = "none";
//   //   		document.getElementById("content2_2").style.display = "none";
//   //   		document.getElementById("content3").style.display = "none";
//   //   		document.getElementById("content4").style.display = "block";
//   //   		document.getElementById("content5").style.display = "block";
//   //   		document.getElementById("toptab1").style.display = "none";
// 	// 	document.getElementById("toptab2").style.display = "block";
//  	// 	document.getElementById("toptab3").style.display = "none";
//     		openTab(evt);	
// }
// function openTab1(evt) {
//   localStorage.setItem("tabid", "adaptability");
//   document.getElementById("toptab1").scrollIntoView();
//   // document.getElementsByTagName('toptab1').scrollIntoView();
// 	// localStorage.setItem("tabid", "contact");
//   // document.getElementsByTagName('toptab1').scrollIntoView();
//     // document.getElementById("content1").style.display = "none";
//   //   		document.getElementById("content2_1").style.display = "none";
//   //   		document.getElementById("content2_2").style.display = "none";
//   //   		document.getElementById("content3").style.display = "none";
//   //   		document.getElementById("content4").style.display = "none";
//   //   		document.getElementById("content5").style.display = "none";
//   //   		document.getElementById("toptab1").style.display = "none";
// 	// 	document.getElementById("toptab2").style.display = "none";
// 	// 	document.getElementById("toptab3").style.display = "block";
//     		openTab(evt);

// }
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

  if(width < 300){
    document.getElementById("defaultOpen").style.fontSize = "13px";
    document.getElementById("contact").style.fontSize = "13px";
    document.getElementById("adaptability").style.fontSize = "13px";
    document.getElementById("publication").style.fontSize = "13px";
    document.getElementById("projects").style.fontSize = "13px";
    document.getElementById("toptab1").style.paddingTop = "655px";
  }
  else if(width < 500){
	document.getElementById("defaultOpen").style.fontSize = "13px";
	document.getElementById("contact").style.fontSize = "13px";
	document.getElementById("adaptability").style.fontSize = "13px";
  document.getElementById("publication").style.fontSize = "13px";
  document.getElementById("projects").style.fontSize = "13px";
  document.getElementById("toptab1").style.paddingTop = "655px";
  }
  else if(width < 1000){
	document.getElementById("defaultOpen").style.fontSize = "15px";
	document.getElementById("contact").style.fontSize = "15px";
	document.getElementById("adaptability").style.fontSize = "15px";
  document.getElementById("publication").style.fontSize = "15px";
  document.getElementById("projects").style.fontSize = "15px";
  document.getElementById("toptab1").style.paddingTop = "120px";
  }
  else
  {
	document.getElementById("defaultOpen").style.fontSize = "20px";
	document.getElementById("contact").style.fontSize = "20px";
	document.getElementById("adaptability").style.fontSize = "20px";
  document.getElementById("publication").style.fontSize = "20px";
  document.getElementById("projects").style.fontSize = "20px";

  document.getElementById("toptab1").style.paddingTop = "115px";
  }
}
function resizeFUN_TECH_views(width) {
  var wdt =  (width * 0.023) + "px";
  document.getElementById("fun").style.fontSize = wdt;
  document.getElementById("techi").style.fontSize = wdt;
  var wdt2 =  (width * 0.018) + "px";
  document.getElementById("skill5t1").style.fontSize = wdt2;
  document.getElementById("skill5t2").style.fontSize = wdt2;
  document.getElementById("skill5t3").style.fontSize = wdt2;


}
function resizeBottomCards(width)
{
  var wdtw = (width * 0.32) + "px";
  var wdt =  (width * 0.32) + "px";
  document.getElementById("vcard1").style.height = wdt;
  document.getElementById("vcard1").style.width = wdtw;
  document.getElementById("vcard2").style.height = wdt;
  document.getElementById("vcard2").style.width = wdtw;
  document.getElementById("vcard3").style.height = wdt;
  document.getElementById("vcard3").style.width = wdtw;

  document.getElementById("vcard4").style.height = wdt;
  document.getElementById("vcard4").style.width = wdtw;
  document.getElementById("vcard5").style.height = wdt;
  document.getElementById("vcard5").style.width = wdtw;
  document.getElementById("vcard6").style.height = wdt;
  document.getElementById("vcard6").style.width = wdtw;

  document.getElementById("vcard10").style.height = wdt;
  document.getElementById("vcard10").style.width = wdtw;

  document.getElementById("vcard7").style.height = wdt;
  document.getElementById("vcard7").style.width = wdtw;
  document.getElementById("vcard8").style.height = wdt;
  document.getElementById("vcard8").style.width = wdtw;
  document.getElementById("vcard9").style.height = wdt;
  document.getElementById("vcard9").style.width = wdtw;

  
  
  var wdt2 =  (width * 0.03) + "px";
  document.getElementById("floatingbtn4s2").style.fontSize = wdt2;
  document.getElementById("floatingbtn4s1").style.fontSize = wdt2;

  var wdt4 =  (width * 0.023) + "px";
  document.getElementById("skill").style.fontSize = wdt4;
  document.getElementById("vcard3").style.fontSize = wdt4;
  document.getElementById("vcard9").style.fontSize = wdt4;

  // var wdt3 =  (width * 0.018) + "px";
  // document.getElementById("social6").style.fontSize = wdt3;

  var wdt6 =  (width * 0.025) + "px";
  document.getElementById("legends").style.fontSize = wdt6;

  // var wdt5 =  ((width * 0.33) * 0.1) + "px";
  // document.getElementById("floatingbtn4s1").style.top = wdt5;
  // document.getElementById("floatingbtn4s1").style.left = wdt5;
  // document.getElementById("floatingbtn4s2").style.top = wdt5;
  // document.getElementById("floatingbtn4s2").style.left = wdt5;
  // document.getElementById("floatingbtn4s3").style.top = wdt5;
  // document.getElementById("floatingbtn4s3").style.left = wdt5;
  // document.getElementById("floatingbtn4s4").style.top = wdt5;
  // document.getElementById("floatingbtn4s4").style.left = wdt5;  
  // document.getElementById("floatingbtn4s5").style.top = wdt5;
  // document.getElementById("floatingbtn4s5").style.left = wdt5;  

}
function resizeSocialMedia(width)
{
  var wdt3 =  (width * 0.1) + "px";
  var wdt4 =  (width * 0.08) + "px";
  // document.getElementById("social7").style.width = wdt4;
  // document.getElementById("social7").style.height = wdt4;
  document.getElementById("social1").style.width = wdt3;
  document.getElementById("social1").style.height = wdt4;
  document.getElementById("social2").style.width = wdt3;
  document.getElementById("social2").style.height = wdt4;
  document.getElementById("social3").style.width = wdt3;
  document.getElementById("social3").style.height = wdt4;
  document.getElementById("social4").style.width = wdt3;
  document.getElementById("social4").style.height = wdt4;
  document.getElementById("social5").style.width = wdt3;
  document.getElementById("social5").style.height = wdt4;
  // document.getElementById("social8").style.width = wdt4;
  // document.getElementById("social8").style.height = wdt4;

  var wdt5 =  (width * 0.08) + "px";
  var wdt6 =  (width * 0.06) + "px";

  document.getElementById("drop1").style.width = wdt5;
  document.getElementById("drop1").style.height = wdt6;

  var wdt7 =  (width * 0.07) + "px";
  var wdt8 =  (width * 0.05) + "px";

  document.getElementById("drop2").style.width = wdt7;
  document.getElementById("drop2").style.height = wdt8;
}
function funHovered()
{
  document.getElementById("techi").style.display = "none";
  document.getElementById("imagecontainer3").style.display = "none";
  document.getElementById("imagecontainer2").style.display = "inline-block";
  document.getElementById("imagecontainer").style.display = "none";
  funHoveredAnimate()
}
function funHoveredAnimate()
{
  if (opacity<1) {
    opacity += .1;
    setTimeout(function(){funHoveredAnimate()},100);
  }
  document.getElementById('animateIMG1').style.opacity = opacity;
  document.getElementById('animateIMG2').style.opacity = opacity;
  document.getElementById('animateIMG3').style.opacity = opacity;
}
function techHovered()
{
  document.getElementById("fun").style.display = "none";
  document.getElementById("imagecontainer3").style.display = "inline-block";
  document.getElementById("imagecontainer2").style.display = "none";
  document.getElementById("imagecontainer").style.display = "none";
  techHoveredAnimate()
}
function techHoveredAnimate()
{
  if (opacity<1) {
    opacity += .1;
    setTimeout(function(){techHoveredAnimate()},100);
  }
  document.getElementById('animateIMG4').style.opacity = opacity;
  document.getElementById('animateIMG5').style.opacity = opacity;
  document.getElementById('animateIMG6').style.opacity = opacity;
}
function normalIt()
{
  opacity = 0;
  document.getElementById("techi").style.display = "inline-block";
  document.getElementById("fun").style.display = "inline-block";
  document.getElementById("imagecontainer3").style.display = "none";
  document.getElementById("imagecontainer2").style.display = "none";
  document.getElementById("imagecontainer").style.display = "inline-block";
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
   window.open("https://www.youtube.com/channel/UCyW7iIz8c0Z655hCCdxVsMw", "_blank");
}
function openmail()
{
 window.location.href = "mailto:sunil847148@gmail.com";
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



function drawChart() {
  var w = window.outerWidth;
  resizepie(w);
}
function resizepie(width)
{
var wdt =  (width * 0.5);
var wdt2 = (width * 0.5)

var wdt5 =  ((width * 0.25) * 0.5) + "px";
var wdt6 =  (width * 1);
var wdt7 =  (width * 0.5);


var wdt3 =  (width * 0.25);
var wdt10 =  wdt3 + "px";
var wdt12 =  (wdt3 * 0.5) + "px";
var wdt13 =  ((wdt * 0.5) - (wdt3 * 0.5)) + "px";

var data = google.visualization.arrayToDataTable([
  ['', ''],
  ['Swift', 8],
  ['Objective C', 8],

  ['Android Development', 2],

  ['HTML / CSS', 4],
  ['JavaScript', 4],
  ['Python', 4],
  ['Node JS', 2],
  ['React JS', 2],

  ['Java', 4],
  ['C++ / C#', 7]
]);
var data2 = google.visualization.arrayToDataTable([
  ['', ''],
  ['iOS / MacOS Development', 16],
  ['dummy', 2],
  ['Full Stack Web Development', 16],
  ['Core Development', 11]
]);

  // Optional; add a title and set the width and height of the chart
  var options = { 'width': wdt3, 'height': wdt3,'backgroundColor' : 'transparent',pieSliceBorderColor : 'transparent', legendTextStyle: { color: '#FFF' }, titleTextStyle: { color: '#FFF' }, legend: {position: 'none'}, slices: {  
0: {offset: 0.2,color: '#ffc0c0'},
1: {offset: 0.2,color: '#ff9595'},

2: {offset: 0.8,color: '#117c6f'},

3: {offset: 0.2,color: '#8359b8'},
4: {offset: 0.2,color: '#d3b7ec'},
5: {offset: 0.2,color: '#a58edf'},
6: {offset: 0.2,color: '#c6cceb'},
7: {offset: 0.2,color: '#818396'},

8: {offset: 0.2,color: '#00ddfd'},
9: {offset: 0.2,color: '#00f7fd'},
},

};
var options2 = {'width': wdt, 'height': wdt2, 'backgroundColor' : 'transparent',pieSliceBorderColor : 'transparent', legendTextStyle: { color: '#FFF' }, titleTextStyle: { color: '#FFF' }, pieHole: 0.6,legend: {position: 'none'},pieSliceText: 'none',
slices: {  
0: {offset: 0.05,color: '#ff0000'},
1: {offset: 0.05,color: 'transparent'},
2: {offset: 0.05,color: '#3e2c6b'},
3: {offset: 0.05,color: '#00b7fd'},
}};


  // Display the chart inside the <div> element with id="piechart"
//   var chart = new google.visualization.PieChart(document.getElementById('piechart'));
//   chart.draw(data, options);
//   var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));
//   chart2.draw(data2, options2);


// document.getElementById("piechart").style.marginTop = wdt13;
// document.getElementById("piechart").style.marginLeft = wdt13;

//   document.getElementById("piechart").style.borderRadius = wdt12;
//   document.getElementById("piechart").style.width = wdt10;
//   document.getElementById("piechart").style.height = wdt10;
}
