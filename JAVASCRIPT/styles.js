setInterval(ray, 1000)
function ray(){
  $('.ray').each(function(){
    var sty = window.getComputedStyle(this, null);
    var xform = sty.getPropertyValue('transform');
    var values = xform.split('(')[1],
      values = values.split(')')[0],
      values = values.split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];
    var scale = Math.sqrt(a*a + b*b);
    var sin = b/scale;
    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    var newAng = angle + Math.round(Math.random() * 10 - 5);
    var rayH = Math.round(Math.random() * 30);
    var o = Math.random() * 1;
    var tl = new TimelineMax();
    tl.to(this, 1, {height:rayH,rotation:newAng, ease: Power0.easeNone})
  })
}