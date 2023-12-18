window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
})

//show/hide faqs

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');
        
        //change icon
        const icon=faq.querySelector('.faq_icon i');  
        if(icon.className=='uil uil-plus') {
            icon.className="uil uil-minus";
        }
        else{
            icon.className="uil uil-plus";
        }
    })
})  


//Show/hide close open button

const menu=document.querySelector('.nav_menu');
const openBtn=document.querySelector('#open-menu-btn');
const closeBtn=document.querySelector('#close-menu-btn');

openBtn.addEventListener('click',() => {
    menu.style.display="flex";
    closeBtn.style.display="inline-block";
    openBtn.style.display="none";
})

//close nav menu

const closeNav=() => {
    menu.style.display="none";
    closeBtn.style.display="none";
    openBtn.style.display="inline-block";
}

closeBtn.addEventListener('click',closeNav);