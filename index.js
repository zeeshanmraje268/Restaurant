
/* Fixed Navbar */

let nav=document.querySelector('.navigation-wrap');
window.onscroll=function(){
    if(document.documentElement.scrollTop> 20){
        nav.classList.add('scroll-on');
    }
    else{
        nav.classList.remove('scroll-on');
    }
}

/* End of Fixed Navbar */


/* Navbar hide after link selection */
let navBar=document.querySelectorAll('.nav-link');
let navCollapse=document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener('click',function(){
        navCollapse.classList.remove('show');
    })
})

/* End of  Navbar hide after link selection */