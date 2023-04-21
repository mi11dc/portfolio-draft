// $(document).ready(function(){
//     $("a").on('click', function(event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function(){
//                 window.location.hash = hash;
//             });
//         }
//     });
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// document.onkeydown=function(e){
//     if (event.keyCode == 123){
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)){
//         return false;
//     }
// }