const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);


$( document ).ready(function() {
    
    // Function to change the nav-bar on scroll
    $(window).scroll(function(){
        ($(window).scrollTop() >= 100) ? (
            $('.fixed-nav-bar').addClass('scrolled'),
            $('.the-bass').addClass('scrolled')
        ) : (
            $('.fixed-nav-bar').removeClass('scrolled'),
            $('.the-bass').removeClass('scrolled')
        );
    });
    
    // Drop Down Function
    $('#menuButton').on('change', function(){
        ($('#menuButton').is(':checked')) ? (
			console.log('123')
            $('.the-bass').addClass('dropped')
        ) : (
            $('.the-bass').removeClass('dropped')
        );
    });
    
});

// SVG Loading
let dots = document.getElementsByClassName('loading-dot');
let loadingSvg = document.getElementById('loading-svg');
let loadingText = document.getElementById('loading-text');
let overlay = document.getElementById('overlay');

function startLoad() {
  // Show overlay, loading SVG, and text
  overlay.style.display = "block";
  loadingSvg.style.display = "block";
  loadingText.style.display = "block";

  // Show and hide dots with animation
  Array.prototype.forEach.call(dots, function (el, index) {
    dots[index].style.display = "none";
    setTimeout(function () {
      dots[index].style.display = "inline-block";
    }, 1000 + (1000 * index));

    setTimeout(function () {
      dots[index].style.display = "none";
    }, 1000 + (1000 * index)); // Adjusted to hide after 2 seconds
  });

  // Hide overlay, loading SVG, and text after 2 seconds
  setTimeout(function () {
    overlay.style.display = "none";
    loadingSvg.style.display = "none";
    loadingText.style.display = "none";
  }, 1000);
}

startLoad();

  // Hide loading SVG and text after 2 seconds
  setTimeout(function () {
    loadingSvg.style.display = "none";
    loadingText.style.display = "none";
  }, 2000);
}

startLoad();

// blur container
function expandPart(element) {
      // Remove the 'expanded' class from all parts
      document.querySelectorAll('.part').forEach(part => {
        part.classList.remove('expanded');
      });

      // Add the 'expanded' class to the clicked part
      element.classList.add('expanded');
    }

// timeline
(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );
    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            "background-image",
            "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            "background-image",
            "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();

