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
