document.querySelector('#up-button').addEventListener('click', topFunction);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("up-button").style.display = "block";
    } else {
        document.getElementById("up-button").style.display = "none";
    }
   
}


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}