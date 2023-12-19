let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

    if(window.scrollY > 0){
       document.querySelector('.header').classList.add('active'); 
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 

window.onload = () =>{

    if(window.scrollY > 0){
       document.querySelector('.header').classList.add('active'); 
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

document.querySelector('.home').onmousemove (e) =>{

    document.querySelectorAll('.home-parallax').forEach(elm=>{
        let speed = elm.getAttritude('data-speed');
        let x = (window.innerWidth - epageX*speed)/90;
        let y = (window.innerHeight - epageY*speed)/90;
        elm.style.transform= 'tranlateX(${y}px) translateY(${x}px)'
    })
};

document.querySelector('.home').onmouseleave () =>{

    document.querySelectorAll('.home-parallax').forEach(elm=>{
        elm.style.transform= 'tranlateX(0px) translateY(0px)';
    });
};
