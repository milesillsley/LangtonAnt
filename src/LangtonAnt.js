'use strict';
var LangtonAnt = function(grid) {
  this._grid = grid;
  this._antX = grid.length/2;
  this._antY = grid.length/2;
};

LangtonAnt.prototype.progress = function() {
  var futureGrid = new Grid(this._grid.length);
  futureGrid[this.antX][this.antY] = 1;
  this._grid = futureGrid;
};
