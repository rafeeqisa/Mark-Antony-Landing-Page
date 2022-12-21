AOS.init();

let navbar = document.querySelector(".navbar")
let links = document.querySelectorAll(".nav-link")

// onload = _ => {
//     scrollTo(0, 0);
// }


links.forEach(link => {

    link.onclick = _ => {
        links.forEach(link => {

            link.classList.remove("active")
        });

        link.classList.add("active")
    }

});


onscroll = _ => {
    if (scrollY >1) {
        navbar.classList.add("bg-nav-scroll")
    }
    else {
        navbar.classList.remove("bg-nav-scroll")
    }

  
    
    

       

}


