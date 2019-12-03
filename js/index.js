$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom img").css({
		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')'
		// filter: "blur(" +(scroll/150) + "px)"
		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		//"-webkit-filter": "blur(" + (scroll/200) + "px)",
		//filter: "blur(" + (scroll/200) + "px)"
	});
	$(".zoom h1").css({
		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
		color: "rgba(255, 255,255,"+ (1-(scroll/600)) + ')'


		//Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
		//"-webkit-filter": "blur(" + (scroll/200) + "px)",
		//filter: "blur(" + (scroll/200) + "px)"
	});
	// console.log(1-(scroll/600));
});
//above adopted from http://webdesignerwall.com/tutorials/zoom-hero-images-scroll


//popout stuff
var pop1 = document.getElementById('popout1');
var pop2 = document.getElementById('popout2');
var pop3 = document.getElementById('popout3');

// Get the button that opens the modal
var btn1 = document.getElementById("firstbutton");
var btn2 = document.getElementById("secbutton");

var btn3 = document.getElementById("thibutton");




// When the user clicks on the button, open the modal 
btn1.addEventListener("click",function(){
    popout1.style.display = "block";
});
btn2.addEventListener("click",function(){
    popout2.style.display = "block";
});
btn3.addEventListener("click",function(){
    popout3.style.display = "block";
});



// When the user clicks anywhere outside of the popout1, close it
window.onclick = function(event) {
    if (event.target == popout1) {
        popout1.style.display = "none";
    }
    if (event.target == popout2) {
        popout2.style.display = "none";
    }
    if (event.target == popout3) {
        popout3.style.display = "none";
    }
}
//end of popout stuff. adopted from https://www.w3schools.com/howto/howto_css_modals.asp