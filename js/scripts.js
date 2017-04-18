svg4everybody();

//radio buttons in form_prereg
document.onload = (function () {
  var radioElems = document.querySelectorAll('.switch__radio');
  for(var i = 0; i < radioElems.length; i++) {
    if(radioElems[i].checked) {
      var elem = radioElems[i];
      while(elem) {
        if (elem.parentNode.classList.contains('switch__item')) {
            elem.parentNode.classList.add('js-radio-checked');
            break;
        } else {
          elem = elem.parentNode;
        }
      }
    }
  }
})();

$(".switch__item").on("click", function() {
    $(this).find('input:radio')[0].checked = true;
    $('.js-radio-checked').toggleClass('js-radio-checked');
    $(this).toggleClass('js-radio-checked');
});

//hamburger menu
$('.main-menu__burger').click(function(){
	$(this).toggleClass('js-menu-opened');
	$('.main-menu__list').toggleClass('js-menu-opened');
});

//user menu
$('.user-menu__toggle').click(function(){
	$(this).toggleClass('js-user-opened');
	$('.user-menu__list').toggleClass('js-user-opened');
});

//tour accounts line activation
var heroAccountElem = document.querySelector('.tour-accounts__text_hero');
var superheroAccountElem = document.querySelector('.tour-accounts__text_superhero');

if(heroAccountElem) {
  heroAccountElem.addEventListener('mouseenter', function (event) {
    var heroLines = document.querySelectorAll('.collage__line_hero');
    if(heroLines) {
      for(var i = 0; i < heroLines.length; i++) {
        heroLines[i].classList.toggle('js-line-active');
      }
    }
  }, false);
  heroAccountElem.addEventListener('mouseleave', function (event) {
    var heroLines = document.querySelectorAll('.collage__line_hero');
    if(heroLines) {
      for(var i = 0; i < heroLines.length; i++) {
        heroLines[i].classList.toggle('js-line-active');
      }
    }
  }, false);
}

if(superheroAccountElem) {
  superheroAccountElem.addEventListener('mouseenter', function (event) {
    var superheroLines = document.querySelectorAll('.collage__line_superhero');
    if(superheroLines) {
      for(var i = 0; i < superheroLines.length; i++) {
        superheroLines[i].classList.toggle('js-line-active');
      }
    }
  }, false);
  superheroAccountElem.addEventListener('mouseleave', function (event) {
    var superheroLines = document.querySelectorAll('.collage__line_superhero');
    if(superheroLines) {
      for(var i = 0; i < superheroLines.length; i++) {
        superheroLines[i].classList.toggle('js-line-active');
      }
    }
  }, false);
}

window.sr = ScrollReveal();
var tourCollageReveal1 = {delay: 100, distance: '-500px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 1500};
var tourCollageReveal2 = {delay: 500, distance: '-500px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 1500};
var tourCollageReveal3 = {delay: 1000, distance: '-500px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 1500};
var tourCollageReveal4 = {delay: 1500, distance: '-500px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 1500};

var mainResumesBlock1 = {delay: 100, distance: '500px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 3000};
var mainResumesBlock2 = {delay: 1000, distance: '500px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 3000};
var mainResumesBlock3 = {delay: 1500, distance: '500px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 3000};

var fooReveal1 = {delay: 100, distance: '100px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 1000};
var fooReveal2 = {delay: 200, distance: '100px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 1000};


sr.reveal('.collage__img_resume1', tourCollageReveal1);
sr.reveal('.collage__img_resume2', tourCollageReveal2);
sr.reveal('.collage__img_resume3', tourCollageReveal3);
sr.reveal('.collage__img_resume4', tourCollageReveal4);

sr.reveal('.resume-examples__img_1', mainResumesBlock2);
sr.reveal('.resume-examples__img_2', mainResumesBlock1);
sr.reveal('.resume-examples__img_3', mainResumesBlock3);

sr.reveal('.page-section ', fooReveal1);
sr.reveal('.text-block__title, .text-block__content p, .text-block__link, .text-block__slogan, .text-block__item, .communication__img, .btn, .intro-video__item, .footer-menu__title, .footer-menu__item, .logo_footer, .pricing__header, .pricing__body, .pricing__footer, .note, .companies, .tour-working__img, .tour-accounts__img, .tour-dashboard__bg, .tour-search__bg, .tour-matching__img, .form__radiofield, .form__inputlabel ', fooReveal2);


