function moveTechiFunction() {
  manual = 0;
  restorePos();
  moveTechiFunctionManual();
}

function moveTechiFunctionManual() {
  document.getElementById("image"). style.borderRadius = "0px";
  document.getElementById("floatingbtn6"). style.borderRadius = "0px";

  document.getElementById("floatingbtn1"). style.borderRadius = "0px";
  document.getElementById("floatingbtn2"). style.borderRadius = "0px";
  document.getElementById("floatingbtn3"). style.borderRadius = "0px";
  document.getElementById("floatingbtn4"). style.borderRadius = "0px";
  document.getElementById("floatingbtn5"). style.borderRadius = "0px";

  document.getElementById("fun").style.opacity = 0;
  document.getElementById("floatingbtn1").style.opacity = 1;
  document.getElementById("floatingbtn2").style.opacity = 1;
  document.getElementById("floatingbtn4").style.opacity = 1;
  document.getElementById("floatingbtn5").style.opacity = 1;
  document.getElementById("floatingbtn3").style.opacity = 1;
  document.getElementById("floatingbtn6").style.opacity = 1;

  document.getElementById("floatingbtn1").style.transform = "translate(-145%, -50%)";
  document.getElementById("floatingbtn2").style.transform = "translate(-145%, 60%)";
  document.getElementById("floatingbtn3").style.transform = "translate(-50%, 45.5%)";
  document.getElementById("floatingbtn4").style.transform = "translate(-159.5%, -145.5%)";
  document.getElementById("floatingbtn5").style.transform = "translate(-55%, -160%)";

  document.getElementById("floatingbtn3").style.borderBottomRightRadius= "50px 50px";
  document.getElementById("floatingbtn2").style.borderBottomLeftRadius= "50px 50px";
  document.getElementById("floatingbtn2").style.borderTopLeftRadius= "0px";
  document.getElementById("floatingbtn1").style.borderBottomLeftRadius= "50px 50px";
  document.getElementById("floatingbtn4").style.borderTopLeftRadius= "50px 50px";
  document.getElementById("floatingbtn5").style.borderTopRightRadius= "50px 50px";
  document.getElementById("floatingbtn5").style.borderBottomRightRadius= "50px 50px";

  document.getElementById("floatingbtn6"). style.borderTopRightRadius = "50px 50px";
  document.getElementById("image"). style.borderTopRightRadius = "50px 50px";

  

  document.getElementById("floatingbtn4").style.height = "220px";
  document.getElementById("floatingbtn5").style.width = "220px";
  document.getElementById("floatingbtn1").style.width = "220px";
  document.getElementById("floatingbtn2").style.width = "220px";
  document.getElementById("floatingbtn3").style.height = "220px";

document.getElementById("img1").style.left = "20px";
  document.getElementById("img2").style.left = "20px";
  document.getElementById("img4").style.left = "20px";
  document.getElementById("img6").style.left = "20px";

document.getElementById("img6").style.opacity = "0";
  document.getElementById("img1").style.opacity = "1";
document.getElementById("floatingbtn6").style.zIndex = "1";
  document.getElementById("floatingbtn1").style.zIndex = "2";

 document.getElementById("c1").style.backgroundImage = "linear-gradient(to right, #8e0e00cc,#1f1c18 40%)";

clearInterval(timer2_cal1);
 timer2Open = 0;
   if(timer1Open == 0){
    timer1Open = 1;
    changeTechImages();
timer1_cal1 = setInterval(changeTechImages, 1000);
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