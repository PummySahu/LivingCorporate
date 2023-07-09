function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();



var flag = 0
  document.querySelector("#menu").addEventListener("click", function () {
    if (flag == 0) {
      document.querySelector("#menu").style.height = "35px"
      document.querySelector("#line1").style.rotate = "32deg"
      document.querySelector("#line3").style.rotate = "-32deg"
      document.querySelector("#line2").style.opacity = "0"
      document.querySelector("#full-scr").style.top = 0
      flag = 1
    } else {
      document.querySelector("#menu").style.height = "35px"
      document.querySelector("#line1").style.rotate = "0deg"
      document.querySelector("#line3").style.rotate = "0deg"
      document.querySelector("#line2").style.opacity = "1"
      document.querySelector("#full-scr").style.top = "-100%"
      flag = 0
    }
  
  })

document.querySelector("#part5>#part51>#cir>#cir1").addEventListener("click",function(){
    document.querySelector("#part5>#part52").style.backgroundImage = "url(./LC-tbr-main.jpg)"
})
document.querySelector("#part5>#part51>#cir>#cir2").addEventListener("click",function(){
    document.querySelector("#part5>#part52").style.backgroundImage = "url(./box3.jpg)"
})

document.querySelector("#part5>#part51>#cir>#cir3").addEventListener("click",function(){
    document.querySelector("#part5>#part52").style.backgroundImage = "url(./LC-tap-cover.jpg)"
})
document.querySelector("#part5>#part51>#cir>#cir4").addEventListener("click",function(){
    document.querySelector("#part5>#part52").style.backgroundImage = "url(./box4.jpg)"
})
document.querySelector("#part5>#part51>#cir>#cir5").addEventListener("click",function(){
    document.querySelector("#part5>#part52").style.backgroundImage = "url(./LC-daretoshare-cover-2.jpg)"
})






var active = 3;

var mncircles = document.querySelectorAll(".cirr");
// var sec = document.querySelectorAll(".sec");

gsap.to(mncircles[active-3],{
    // opacity:.5,
    backgroundColor:" #FEF9F3",
    boxShadow:"-5px 5px .5px .5px rgb(17, 16, 16"
})

// gsap.to(sec[active-1],{
//     opacity:1
// })


mncircles.forEach(function(val,index){
    val.addEventListener("click",function(){
        // gsap.to("#circle",{
        //     rotate:(3-(index+1))*10,
        //     ease:Expo.easeInOut,
        //     duration:1
        // })
        console.log("hello"),
        greyout();
        gsap.to(this,{
            // opacity:1,
            backgroundColor: "#FEF9F3",
            boxShadow: "-5px 5px .5px .5px rgb(17, 16, 16) "

        })
        // gsap.to(sec[index],{
        //     opacity:1
        // })
    })
    
})


function greyout(){
    gsap.to(mncircles,{
        // opacity:.08
        backgroundColor:"transparent",
        boxShadow:" 0px 0px 0px 0px"
    })
    // gsap.to(sec,{
    //     opacity:.4
    // })
}
// gsap.to("#circle",{
//     rotate:0,
//     ease:Expo.easeInOut,
//     duration:2
// })



// mncircles.addEventListener("onmousemove",function(val){
//     val.style.backgroundColor = "#FEF9F3"
// })




var pds = document.querySelector("#pds")
var pods = document.querySelector("#pods")
pds.addEventListener("mousemove",function(){
    pods.style.scale = "1"
})
pds.addEventListener("mouseleave",function(){
    pods.style.scale = "0"
})




var shw = document.querySelector("#shw")
var shows = document.querySelector("#shows")
shw.addEventListener("mousemove",function(){
    shows.style.scale = "1"
})
shw.addEventListener("mouseleave",function(){
    shows.style.scale = "0"
})


var art = document.querySelector("#art")
var arts = document.querySelector("#arts")
art.addEventListener("mousemove",function(){
    arts.style.scale = "1"
})
art.addEventListener("mouseleave",function(){
    arts.style.scale = "0"
})



var net = document.querySelector("#net")
var network = document.querySelector("#network")
net.addEventListener("mousemove",function(){
    network.style.scale = "1"
})
net.addEventListener("mouseleave",function(){
    network.style.scale = "0"
})


var lst = document.querySelector("#lst")
var list = document.querySelector("#list")
lst.addEventListener("mousemove",function(){
    list.style.scale = "1"
})
lst.addEventListener("mouseleave",function(){
    list.style.scale = "0"
})



var job = document.querySelector("#job")
var jobboard = document.querySelector("#jobboard")
job.addEventListener("mousemove",function(){
    jobboard.style.scale = "1"
})
job.addEventListener("mouseleave",function(){
    jobboard.style.scale = "0"
})


var cont = document.querySelector("#cont")
var contact = document.querySelector("#contact")
cont.addEventListener("mousemove",function(){
    contact.style.scale = "1"
})
cont.addEventListener("mouseleave",function(){
    contact.style.scale = "0"
})




var shp = document.querySelector("#shp")
var shop = document.querySelector("#shop")
shp.addEventListener("mousemove",function(){
    shop.style.scale = "1"
})
shp.addEventListener("mouseleave",function(){
    shop.style.scale = "0"
})









var boxes = document.getElementsByClassName("heading");
var index = 0;

setInterval(function() {
  boxes[index].id = "";
  index = (index + 1) % boxes.length;
  boxes[index].id = "active";
}, 5000);



gsap.from("#nav",{
    y:-100,
    ease:Expo,
    opacity:0,
    duration:2
})

gsap.from("#menu",{
    y:-100,
    ease:Expo,
    opacity:0,
    duration:2
})

gsap.from("#part1221",{
    // y:-100,
    ease:Expo,
    // opacity:0,
    duration:2,
    delay:2,
    scale:0

})

gsap.from("#line",{
    // y:-100,
    ease:Expo,
    opacity:0,
    duration:2,
    delay:3,
    // scale:0

})
gsap.from("#numb",{
    // y:-100,
    ease:Expo,
    opacity:0,
    duration:2,
    delay:3,
    // scale:0

})

gsap.from("#part12>h4",{
    // y:-100,
    ease:Expo,
    opacity:0,
    duration:2,
    delay:3,
    // scale:0
})





var iscroll = document.querySelector("#scroll121")
var overlay = document.querySelector("#overlay121")

overlay.addEventListener("mouseenter",function(){
    iscroll.style.scale = "1"
})
overlay.addEventListener("mouseleave",function(){
    iscroll.style.scale = "0"
})

overlay.addEventListener("mousemove",function(dets){
    iscroll.style.left = (dets.x-940)+"px"
    iscroll.style.top = (dets.y-260)+"px"
})


//****************************************************************************** */

var box1 = document.querySelector("#box1")
var over1 = document.querySelector("#over1")


box1.addEventListener("mousemove",function(debt){
    over1.style.left = (debt.x-250)+"px"
    over1.style.top = (dets.y-300)+"px"
})

box1.addEventListener("mouseenter",function(){
    over1.style.scale = "1"
    box1.style.cursor = "pointer"
})
box1.addEventListener("mouseleave",function(){
    over1.style.scale = "0"
})

var box2 = document.querySelector("#box2")
var over2 = document.querySelector("#over2")


box2.addEventListener("mousemove",function(moo){
    over2.style.left = (moo.x-250)+"px"
    over2.style.top = (moo.y-300)+"px"
})

box2.addEventListener("mouseenter",function(){
    over2.style.scale = "1"
    box2.style.cursor = "pointer"
})
box2.addEventListener("mouseleave",function(){
    over2.style.scale = "0"
})

var box3 = document.querySelector("#box3")
var over3 = document.querySelector("#over3")
box3.addEventListener("mousemove",function(moo){
    over3.style.left = (moo.x-250)+"px"
    over3.style.top = (moo.y-300)+"px"
})

box3.addEventListener("mouseenter",function(){
    over3.style.scale = "1"
    box3.style.cursor = "pointer"
})
box3.addEventListener("mouseleave",function(){
    over3.style.scale = "0"
})

var box4 = document.querySelector("#box4")
var over4 = document.querySelector("#over4")
box4.addEventListener("mousemove",function(moo){
    over4.style.left = (moo.x-250)+"px"
    over4.style.top = (moo.y-300)+"px"
})

box4.addEventListener("mouseenter",function(){
    over4.style.scale = "1"
    box4.style.cursor = "pointer"
})
box4.addEventListener("mouseleave",function(){
    over4.style.scale = "0"
})

// var bomx = document.querySelectorAll(".box")
// var overa = document.querySelectorAll(".over")


// bomx.forEach((bomx) => {
//     overa.forEach((overa)=>{
//         bomx.addEventListener("mouseenter",function(){
//             overa.style.scale = "1"
//             bomx.style.cursor = "pointer"
//         })
//         bomx.addEventListener("mousemove",function(debt){
//             overa.style.left = (debt.x)+"px"
//             overa.style.top = (debt.y-200)+"px"
//         })
//         bomx.addEventListener("mouseleave",function(){
//             overa.style.scale = "0"
//         })
//     })
// });



var cir = document.querySelectorAll("#part5>#part51>#cir>button")
cir.forEach((circle)=>{
    circle.addEventListener("mousemove",function(){
        this.style.backgroundColor = "#FEF9F3";
        this.style.boxShadow= "-5px 5px .5px .5px rgb(17, 16, 16)";
    })
    circle.addEventListener("mouseleave",function(){
        this.style.backgroundColor = "transparent";
        this.style.boxShadow= "none";
    })

})
var bg = document.querySelector("#part52")
circle.addEventListener("mouseclick",function(){
    this.style.backgroundColor = "transparent";
    this.style.boxShadow= "none";
})

document.querySelector("#part5>#part51>#cir>#cir2").addEventListener("click",function(){
    document.querySelector("#part5>#part52").style.backgroundImage = "url(./box3.jpg)"
})




