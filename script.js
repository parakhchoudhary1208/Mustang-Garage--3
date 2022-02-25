var main=document.getElementById("main");
var circle=document.getElementById("circle");
var circle1=document.getElementById("circle1");
var circle2=document.getElementById("circle2");
var circle3=document.getElementById("circle3");
var rect2=document.getElementById("rect2");
var year=document.getElementById("year");
var ford=document.getElementById("ford");
var ele=document.getElementById("ele");
var circle5=document.getElementById("circle5");
var arrup=document.getElementById("arrup");
var arrdn=document.getElementById("arrdn");
var arrlt=document.getElementById("arrlt");
var arrrt=document.getElementById("arrrt");
var circle6=document.getElementById("circle6");
var menu=document.getElementById("menu");
var search=document.getElementById("search");
var must=document.getElementById("must");
var gar=document.getElementById("gar");
var moon=document.getElementById("moon");
var sun=document.getElementById("sun");
var thname=document.getElementById("thname");
var day=document.getElementById("day");
var day1=document.getElementById("day1");
var navb1=document.getElementById("navb1");
var navb2=document.getElementById("navb2");
var navb3=document.getElementById("navb3");
var navb4=document.getElementById("navb4");
var feat11=document.getElementById("feat11");
var value11=document.getElementById("value11");
var feat21=document.getElementById("feat21");
var value21=document.getElementById("value21");
var feat31=document.getElementById("feat31");
var value31=document.getElementById("value31");
var feat41=document.getElementById("feat41");
var value41=document.getElementById("value41");
var circle4=document.getElementById("circle4");
var theme=0;
document.getElementById("nav4").addEventListener("click",function(){
    if(theme===0){
    main.style.backgroundColor="rgb(221, 221, 221)";
    circle.style.backgroundColor="#bbbbbb";
    circle1.style.backgroundColor="rgba(187, 187, 187, 0.844)";
    circle2.style.backgroundColor="transparent";
    circle3.style.backgroundColor="transparent";
    rect2.style.webkitTextStrokeColor="rgb(175, 175, 175)";
    year.style.color="rgb(175, 175, 175)";
    ford.style.color="rgb(138, 137, 137)";
    ele.style.color="rgb(138, 137, 137)";
    circle5.style.borderColor="rgba(67, 66, 66, 0.357)";
    circle5.style.backgroundColor="rgba(255, 255, 255, 0.118)";
    circle5.style.top="21%";
    arrup.style.color="rgb(153, 151, 151)";
    document.getElementById("arrup").addEventListener("mouseenter", function(){
        arrup.style.color="black";
    });
    document.getElementById("arrup").addEventListener("mouseleave", function(){
        arrup.style.color="rgb(153, 151, 151)";
    });
    document.getElementById("arrdn").addEventListener("mouseenter", function(){
        arrdn.style.color="black";
    });
    document.getElementById("arrdn").addEventListener("mouseleave", function(){
        arrdn.style.color="rgb(153, 151, 151)";
    });
    document.getElementById("arrlt").addEventListener("mouseenter", function(){
        arrlt.style.color="black";
    });
    document.getElementById("arrlt").addEventListener("mouseleave", function(){
        arrlt.style.color="rgb(153, 151, 151)";
    });
    document.getElementById("arrrt").addEventListener("mouseenter", function(){
        arrrt.style.color="black";
    });
    document.getElementById("arrrt").addEventListener("mouseleave", function(){
        arrrt.style.color="rgb(153, 151, 151)";
    });
    arrdn.style.color="rgb(153, 151, 151)";
    arrlt.style.color="rgb(153, 151, 151)";
    arrrt.style.color="rgb(153, 151, 151)";
    circle6.style.backgroundColor="rgb(221, 221, 221)";
    circle6.style.borderColor="rgba(97, 97, 97, 0.453)";
    menu.style.color="rgb(92, 92, 92)";
    search.style.color="rgb(92, 92, 92)";
    must.style.color="rgb(92, 92, 92)";
    gar.style.color="rgb(92, 92, 92)";
    sun.style.color="rgb(92, 92, 92)";
    moon.style.color="transparent";
    thname.style.color="rgb(92, 92, 92)";
    thname.style.letterSpacing="2px";
    day.style.color="#aaaaaaf3";
    day1.innerHTML="DAY";
    navb1.style.backgroundColor="rgba(255, 255, 255, 0.652)";
    navb1.style.borderRight="2px solid rgb(218, 218, 218)";
    document.getElementById("navb1").addEventListener("mouseenter", function(){
        navb1.style.backgroundColor="rgba(245, 245, 245, 0.385)";
    });
    document.getElementById("navb1").addEventListener("mouseleave", function(){
        navb1.style.backgroundColor="rgba(255, 255, 255, 0.652)";
    });
    navb2.style.backgroundColor="rgba(255, 255, 255, 0.652)";
    navb2.style.borderRight="2px solid rgb(218, 218, 218)";
    document.getElementById("navb2").addEventListener("mouseenter", function(){
        navb2.style.backgroundColor="rgba(245, 245, 245, 0.385)";
    });
    document.getElementById("navb2").addEventListener("mouseleave", function(){
        navb2.style.backgroundColor="rgba(255, 255, 255, 0.652)";
    });
    navb3.style.backgroundColor="rgba(255, 255, 255, 0.652)";
    navb3.style.borderRight="2px solid rgb(218, 218, 218)";
    document.getElementById("navb3").addEventListener("mouseenter", function(){
        navb3.style.backgroundColor="rgba(245, 245, 245, 0.385)";
    });
    document.getElementById("navb3").addEventListener("mouseleave", function(){
        navb3.style.backgroundColor="rgba(255, 255, 255, 0.652)";
    });
    navb4.style.backgroundColor="rgba(255, 255, 255, 0.652)";
    document.getElementById("navb4").addEventListener("mouseenter", function(){
        navb4.style.backgroundColor="rgba(245, 245, 245, 0.385)";
    });
    document.getElementById("navb4").addEventListener("mouseleave", function(){
        navb4.style.backgroundColor="rgba(255, 255, 255, 0.652)";
    });
    feat11.style.color="rgb(92, 92, 92)";
    value11.style.color="rgb(138, 137, 137)";
    feat21.style.color="rgb(92, 92, 92)";
    value21.style.color="rgb(138, 137, 137)";
    feat31.style.color="rgb(92, 92, 92)";
    value31.style.color="rgb(138, 137, 137)";
    feat41.style.color="rgb(92, 92, 92)";
    value41.style.color="rgb(138, 137, 137)";
    circle4.style.backgroundImage="url(logo1.png)";
    circle4.style.backgroundPosition="center";
    circle4.style.backgroundSize="cover";
    document.getElementById("circle4").addEventListener("mouseenter", function(){
        circle4.style.filter="drop-shadow(4px 4px 4px rgba(255, 255, 255, 0.857))";
        circle4.style.webkitFilter="drop-shadow(0px 0px 4px rgb(255, 255, 255))";
    });
    document.getElementById("circle4").addEventListener("mouseleave", function(){
        circle4.style.filter="drop-shadow(0px 0px 0px rgba(255, 255, 255, 0.857))";
        circle4.style.webkitFilter="drop-shadow(0px 0px 0px rgb(255, 255, 255))";
    });
    theme=1;
    }
    else{
    main.style.backgroundColor="rgba(0, 0, 0, 0.741)";
    circle.style.backgroundColor="#6b6767c0";
    circle1.style.backgroundColor="rgba(255, 255, 255, 0.844)";
    circle2.style.backgroundColor="rgb(255, 247, 0)";
    circle3.style.backgroundColor="red";
    rect2.style.webkitTextStrokeColor="#949292";
    year.style.color="#959292";
    ford.style.color="rgb(223, 219, 219)";
    ele.style.color="rgb(223, 219, 219)";
    circle5.style.borderColor="rgba(255, 255, 255, 0.357)";
    circle5.style.backgroundColor="rgba(255, 255, 255, 0.118)";
    circle5.style.top="24%";
    arrup.style.color="rgba(255, 255, 255, 0.652)";
    arrdn.style.color="rgba(255, 255, 255, 0.652)";
    arrlt.style.color="rgba(255, 255, 255, 0.652)";
    arrrt.style.color="rgba(255, 255, 255, 0.652)";
    document.querySelector("#arrup").addEventListener("mouseenter", function(){
        arrup.style.color="white";
    });
    document.getElementById("arrup").addEventListener("mouseleave", function(){
        arrup.style.color="rgba(255, 255, 255, 0.652)";
    });
    document.getElementById("arrdn").addEventListener("mouseenter", function(){
        arrdn.style.color="white";
    });
    document.getElementById("arrdn").addEventListener("mouseleave", function(){
        arrdn.style.color="rgba(255, 255, 255, 0.652)";
    });
    document.getElementById("arrlt").addEventListener("mouseenter", function(){
        arrlt.style.color="white";
    });
    document.getElementById("arrlt").addEventListener("mouseleave", function(){
        arrlt.style.color="rgba(255, 255, 255, 0.652)";
    });
    document.getElementById("arrrt").addEventListener("mouseenter", function(){
        arrrt.style.color="white";
    });
    document.getElementById("arrrt").addEventListener("mouseleave", function(){
        arrrt.style.color="rgba(255, 255, 255, 0.652)";
    });
    circle6.style.backgroundColor="rgba(0, 0, 0, 0.426)";
    circle6.style.borderColor="rgba(255, 255, 255, 0.453)";
    menu.style.color="white";
    search.style.color="white";
    must.style.color="white";
    gar.style.color="white";
    sun.style.color="transparent";
    moon.style.color="white";
    moon.style.position="absolute";
    moon.style.right="15%";
    thname.style.color="white";
    thname.style.letterSpacing="0px";
    day.style.color="#c2bfbff3";
    day1.innerHTML="NIGHT";
    navb1.style.backgroundColor="rgba(255, 255, 255, 0.302)";
    navb1.style.borderRight="2px solid rgb(107, 107, 107)";
    document.getElementById("navb1").addEventListener("mouseenter", function(){
        navb1.style.backgroundColor="rgba(245, 245, 245, 0.385)";
    });
    document.getElementById("navb1").addEventListener("mouseleave", function(){
        navb1.style.backgroundColor="rgba(255, 255, 255, 0.302)";
    });
    navb2.style.backgroundColor="rgba(255, 255, 255, 0.302)";
    navb2.style.borderRight="2px solid rgb(107, 107, 107)";
    document.getElementById("navb2").addEventListener("mouseenter", function(){
        navb2.style.backgroundColor="rgba(245, 245, 245, 0.385)";
    });
    document.getElementById("navb2").addEventListener("mouseleave", function(){
        navb2.style.backgroundColor="rgba(255, 255, 255, 0.302)";
    });
    navb3.style.backgroundColor="rgba(255, 255, 255, 0.302)";
    navb3.style.borderRight="2px solid rgb(107, 107, 107)";
    document.getElementById("navb3").addEventListener("mouseenter", function(){
        navb3.style.backgroundColor="rgba(245, 245, 245, 0.385)";
    });
    document.getElementById("navb3").addEventListener("mouseleave", function(){
        navb3.style.backgroundColor="rgba(255, 255, 255, 0.302)";
    });
    navb4.style.backgroundColor="rgba(255, 255, 255, 0.302)";
    document.getElementById("navb4").addEventListener("mouseenter", function(){
        navb4.style.backgroundColor="rgba(245, 245, 245, 0.385)";
    });
    document.getElementById("navb4").addEventListener("mouseleave", function(){
        navb4.style.backgroundColor="rgba(255, 255, 255, 0.302)";
    });
    feat11.style.color="rgb(49, 49, 49)";
    value11.style.color="rgb(199, 199, 199)";
    feat21.style.color="rgb(49, 49, 49)";
    value21.style.color="rgb(199, 199, 199)";
    feat31.style.color="rgb(49, 49, 49)";
    value31.style.color="rgb(199, 199, 199)";
    feat41.style.color="rgb(49, 49, 49)";
    value41.style.color="rgb(199, 199, 199)";
    circle4.style.backgroundImage="url(logo.png)";
    circle4.style.backgroundPosition="center";
    circle4.style.backgroundSize="cover";
    document.getElementById("circle4").addEventListener("mouseenter", function(){
        circle4.style.filter="drop-shadow(4px 4px 4px rgba(255, 255, 255, 0.857))";
        circle4.style.webkitFilter="drop-shadow(0px 0px 4px rgb(255, 255, 255))";
    });
    document.getElementById("circle4").addEventListener("mouseleave", function(){
        circle4.style.filter="drop-shadow(0px 0px 0px rgba(255, 255, 255, 0.857))";
        circle4.style.webkitFilter="drop-shadow(0px 0px 0px rgb(255, 255, 255))";
    });
    theme=0;
    }
});