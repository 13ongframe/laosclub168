       /*--------------------------- slick Carousel ----------------------------*/

    //    ********Slide Casino**********
       $(document).ready(function(){
        $('.slide-show').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });
        });
    
        
    //    ********Slide Slot**********
    $(document).ready(function(){
        $('.slide-showslot').slick({
            lazyLoad: 'ondemand',
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 4,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 3,
                }
              }
    
            ]
          });
        });    

      
        
/*----------------------- menu ---------------------*/

// const { Carousel } = require("bootstrap");


$( window ).on('scroll', function(){
    var scrollTop = $(this).scrollTop()
    var score = '15px'
    if (scrollTop > 1) {
        score = '5px 15px'
    }
    $('#navbar').css('padding', score)
});


/*-----------------------end menu ---------------------*/




/*------------------------ typing writter-----------------------*/

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};




// =============================Modal Login================================

// Get the modal
var modal = document.getElementById("ModalLogin");
		
// Get the button that opens the modal
var btn = document.getElementById("BtnLogin");
var BtnHeader = document.getElementById("BtnHeader");
var BtnButton = document.getElementById("BtnButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks the button, open the modal on section header
BtnHeader.onclick = function() {
	modal.style.display = "block";
  }
BtnButton.onclick = function() {
	modal.style.display = "block";
  }




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  	// console.log(ddddddddddddddd);
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
	modal.style.display = "none";
  }
}	


// active on navbar
$(document).on('click', '#BtnHeader', function(){
	$('#BtnLogin').addClass('active')
	$('#HomePage').removeClass('active')
})


$(document).on('click', '.close', function(){
	$('#BtnLogin').removeClass('active');
	$('#HomePage').addClass('active');
})





// =============================End Modal Login================================





// ============================= Modal Regis================================

// Get the modal
var ModalRegis = document.getElementById("ModalRegis");
		
// Get the button that opens the modal
var BtnRegis = document.getElementById("BtnRegis");
var BtnHeaderRegis = document.getElementById("BtnHeaderRegis");
var BtnButtonRegis = document.getElementById("BtnButtonRegis");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];


// When the user clicks the button, open the modal 
BtnRegis.onclick = function() {
	ModalRegis.style.display = "block";
}

// When the user clicks the button, open the modal on section header
BtnHeaderRegis.onclick = function() {
	ModalRegis.style.display = "block";
  }
BtnButtonRegis.onclick = function() {
	ModalRegis.style.display = "block";
  }




// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	ModalRegis.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == ModalRegis) {
	ModalRegis.style.display = "none";
  }
}	


// active on navbar
$(document).on('click', '#BtnHeaderRegis', function(){
	$('#HomePage').removeClass('active')
	$('#BtnRegis').addClass('active')
})


$(document).on('click', '.close', function(){
	$('#BtnRegis').removeClass('active')
	$('#HomePage').addClass('active')
})



// =============================End Modal Regis================================


function close_ads_r(e){$(this).on('click',function(){$('.c_ads-right').hide()})}

// function close_ads_r(e){$(this).on('click',function(){$('.c_ads_closx-r').hide()})}

function close_ads_l(e){$(this).on('click',function(){$('.c_ads-left').hide()})}

function close_ads_bt(e){$(this).on('click',function(){$('.c_ads-bottom').hide()})}



function buttonlogin(e){$(this).on('click',function(){$('#ModalLogin').attr('block')})}
function close_ads_bt(e){$(this).on('click',function(){$('.c_ads-bottom').show()})}
