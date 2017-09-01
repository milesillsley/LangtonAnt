'use strict';

var Grid = function(size) {
  this.grid = [];
  for(var x=0; x<size; x++) {
    this.grid.push([]);
    for(var y=0; y<size; y++) {
      this.grid[x].push(0);
    };
  };
  return this.grid;
};
