gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".hero, .card").forEach((card)=>{

gsap.to(card,{

opacity:1,

y:0,

scale:1,

duration:.9,

ease:"power3.out",

scrollTrigger:{

trigger:card,

start:"top 88%"

}

});

});

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*8;

const rotateX=((rect.height/2-y)/rect.height)*8;

gsap.to(card,{

rotationY:rotateY,

rotationX:rotateX,

transformPerspective:900,

duration:.35

});

});

card.addEventListener("mouseleave",()=>{

gsap.to(card,{

rotationX:0,

rotationY:0,

duration:.45

});

});

});

const button=document.getElementById("accept");

const message=document.getElementById("message");

button.addEventListener("click",(e)=>{

message.innerHTML="❤️ До встречи!";

const ripple=document.createElement("span");

const size=button.offsetWidth;

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.offsetX-size/2+"px";

ripple.style.top=e.offsetY-size/2+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

gsap.fromTo(button,

{

scale:.9

},

{

scale:1.05,

duration:.2,

yoyo:true,

repeat:1

});

});
