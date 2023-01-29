let boxs = document.querySelectorAll('.boxs');

window.addEventListener('scroll', checkBox);

checkBox()
function checkBox(){
  let targitHeight = window.innerHeight / 3 * 2;
  boxs.forEach((box)=>{
    let boxTop = box.getBoundingClientRect().top;

    if(boxTop < targitHeight){
      box.classList.add('show')
    }else{
      box.classList.remove('show')
    }
  })
}

btnList.addEventListener('click',()=>{
  navList.classList.toggle('active')
  })

onscroll = function(){
  if(window.scrollY){
    navList.classList.remove('active')
  }
  if(scrollY >= 700){
    btn.style.display = 'block'
  }else{
    btn.style.display = 'none'
  }
}
btn.addEventListener('click',()=>{
  scroll({
    left:0,
    top:0,
    behavior:"smooth"
  })
});


