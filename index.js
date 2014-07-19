;(function(){

  window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame
  })();

  window.vendor = "",
	div = document.createElement('div'),
	props = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'],
	i = 0,
	cssTransform = false;
  while (props[i]) {
    if (props[i] in div.style) {
      cssTransform = true;
      vendor = props[i].replace(/transform/i,'');
      vendor = vendor.toLowerCase();
      if(cssTransform && vendor) vendor = "-" + vendor + "-";
      break;
    }
    i++;
  }


  if (!!('ontouchstart' in window) || !requestAnimFrame || !cssTransform) return false;

  document.body.className = "animate";

  var lastPosition = -10,
	wHeight = window.innerHeight,

	title = $("header h1"),
	scrollDown = $("#scroll-down"),

	steps = $("#steps"),
	mountains2 = $("#mountains2"),
	mountains = $("#mountains"),
	clouds = $("#clouds"),
	clouds2 = $("#clouds2"),
	clouds3 = $("#clouds3"),
	cloudsF = $("#cloudsF"),
	cloudsM = $("#m1"),

	group1 = $(".group1"),

//land = $("#land"),

	flip = $(".flip-thing"),

	loop = function(){
		if (lastPosition == window.pageYOffset) {
			requestAnimFrame(loop);
			return false;
		} else lastPosition = window.pageYOffset;

		if (window.pageYOffset < 500) {
			title.css('opacity',1);
			scrollDown.css('opacity',1);
			mountains.css('opacity',1);
			mountains2.css('opacity',1);

			title.css(vendor+'transform', "translate3d(0, "+ (window.pageYOffset/-3.8) +"px,0)" );
			title.css('opacity', 1.2-(window.pageYOffset/400) );
			scrollDown.css('opacity', 1-(window.pageYOffset/100) );

			clouds.css(vendor+'transform', "translate3d(0, "+ (window.pageYOffset/-1.2) +"px,0)" );
			cloudsF.css(vendor+'transform', "translate3d(0, "+ (window.pageYOffset/-1.2) +"px,0)" );
			cloudsM.css(vendor+'transform', "translate3d(0, "+ (window.pageYOffset/-1.2) +"px,0)" );
			clouds2.css(vendor+'transform', "translate3d(0, "+ (window.pageYOffset/-1.8) +"px,0)" );
			clouds3.css(vendor+'transform', "translate3d(0, "+ (window.pageYOffset/-3) +"px,0)" );

			mountains.css(vendor+'transform', "translate3d(0, "+ (window.pageYOffset/-1.2) +"px,0)" );
			mountains2.css(vendor+'transform', "translate3d(0, "+ (window.pageYOffset/-2) +"px,0)" );
		} else {
			title.css('opacity',0);
			scrollDown.css('opacity',0);

			mountains.css('opacity',0);
			mountains2.css('opacity',0);

			clouds.css(vendor+'transform', "translate3d(0, -416px,0)" );
			cloudsF.css(vendor+'transform', "translate3d(0, -416px,0)" );
			cloudsM.css(vendor+'transform', "translate3d(0, -416px,0)" );
			clouds2.css(vendor+'transform', "translate3d(0, -277px,0)" );
			clouds3.css(vendor+'transform', "translate3d(0, -166px,0)" );
		}

		if (window.pageYOffset > 700	) {
			flip.addClass("start");
		}

		requestAnimFrame(loop);
	};

  window.onresize = function(){
  	wHeight = window.innerHeight;
  }
  loop();

}());