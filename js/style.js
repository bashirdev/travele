let next =document.querySelector('.next');
let prev =document.querySelector('.prev');
let header=document.querySelector('.header')
let cardItem=document.querySelectorAll('.card-item');

let images=[
    {img:'../img/nat-1-large.jpg', title:'Hard work', sub:'Learn more about programming Language'},
    {img:'../img/nat-2-large.jpg', title:'Learn more ', sub:'do not wast time'},
    {img:'../img/nat-3-large.jpg', title:'This is Bashir Ahammed', sub:'Enjoy your time with programming'},
]
let num=0;
function nextBtn(){
    num++;
    if(num >= images.length){
        num=0;
    }
   
    let url=images[num].img;
    document.querySelector('.header').style.backgroundImage=`linear-gradient(to left bottom,rgba(126, 213, 111, 0.36) ,  rgba(40,180,131,0.8)),url(${url})`
    header.style.transition='all 5s ease'
}

function prevBtn(){
   num--;
   if(num < 0){
     num=images.length-1;
   }
   let url=images[num].img;
 let title=images[num].title;
 let sub=images[num].sub;
 
  document.querySelector('.heading-primary-main').innerHTML=title;
  document.querySelector('.heading-primary-sub').innerHTML=sub;
    document.querySelector('.header').style.backgroundImage=`linear-gradient(to left bottom,rgba(126, 213, 111, 0.36) ,  rgba(40,180,131,0.8)),url(${url})`
    document.querySelector('.header').style.transition='all 1s ease'
    document.querySelector('.header').style.transition='all 0.5s ease'
}


next.addEventListener('click', nextBtn)
 prev.addEventListener('click', prevBtn)


cardItem.forEach(element => {
 
     element.addEventListener('mouseover', ()=>{
        removeActive()
        element.classList.add('active')
        element.style.transition='all 0.5s ease'
     })
});
function removeActive() {
    cardItem.forEach(ele=>{
        ele.classList.remove('active')
    })
    
};


let menu=document.querySelector('.bars')
let close =document.querySelector('.close')
let ulItem=document.querySelector('.ul')
let imgss=document.querySelector('.imgss')
menu.addEventListener('click', ()=>{
    document.querySelector('.nav').style.visibility='visible'
  ulItem.classList.toggle('active')
  imgss.classList.toggle('active')
  ulItem.style.transition='all 2s ease'
  imgss.style.transition='all 3s ease'

  document.querySelector('.open').style.visibility='hidden'
  document.querySelector('.close').style.visibility='visible'

})

close.addEventListener('click', ()=>{
    document.querySelector('.nav').style.visibility='hidden'
  ulItem.classList.remove('active')
  imgss.classList.remove('active')
  ulItem.style.transition='all 2s ease'
  imgss.style.transition='all 3s ease'
  document.querySelector('.open').style.visibility='visible'
  document.querySelector('.close').style.visibility='hidden'
})