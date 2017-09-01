(function() {
  var w = 1000;
  var h = 1000;
  var step = 10;
  var ant = new LangtonAnt(new Grid(100));
  var refreshFrame;
  var nextFrame = document.getElementById('nextFrame');
  nextFrame.addEventListener('click', progressAnt);
  var start = document.getElementById('start');
  start.addEventListener('click', startAnt);
  var stop = document.getElementById('stop');
  stop.addEventListener('click', stopAnt);
  var canvas = document.getElementById('canvas');
  canvas.width  = w;
  canvas.height = h;
  var ctx = canvas.getContext('2d');
  canvas.addEventListener('click', handleClick);
  var drawGrid = function(ctx, w, h, step) {
      ctx.beginPath();
      for (var x=0;x<=w;x+=step) {
              ctx.moveTo(x, 0);
              ctx.lineTo(x, h);
      }
      ctx.strokeStyle = 'rgb(255,0,0)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.beginPath();
      for (var y=0;y<=h;y+=step) {
              ctx.moveTo(0, y);
              ctx.lineTo(w, y);
      }
      ctx.strokeStyle = 'rgb(255,0,0)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
  };

  var updateGrid = function(ctx, w, h, step) {

  };
  function delay(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
  }
  function progressAnt() {
    ant.progress();
    updateGrid(ctx, w, h, step);
  }
  function startAnt() {
    refreshFrame = window.setInterval(progressAnt,200);
  }
  function stopAnt() {
    window.clearInterval(refreshFrame);
  }

  function handleClick(e) {
    if (ant._grid[Math.floor(e.offsetY / step)][Math.floor(e.offsetX / step)] === 0) {
      ctx.fillStyle = "black";

      ctx.fillRect(Math.floor(e.offsetX / step) * step + 1,
        Math.floor(e.offsetY / step) * step + 1,
        step - 2, step - 2);

      ant._grid[Math.floor(e.offsetY / step)][Math.floor(e.offsetX / step)] = 1;
    } else {
      ctx.fillStyle = "white";

      ctx.fillRect(Math.floor(e.offsetX / step) * step + 1,
        Math.floor(e.offsetY / step) * step + 1,
        step - 2, step - 2);

      ant._grid[Math.floor(e.offsetY / step)][Math.floor(e.offsetX / step)] = 0;
    }
  }

  drawGrid(ctx, w, h, step);
}());
