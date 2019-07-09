import Cell from './cell';

export class Board {

  cells = [[], [], [], [], [], [], [], []];

  constructor() {
    for (let i = 0; i < 8; i++) {

      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) 
          this.cells[i][j] = new Cell({x: i, y: j}, 'white');
        else 
          this.cells[i][j] = new Cell({x: i, y: j}, 'black');
      }
    }
  }

  start() {
    for (let i = 0; i < 8; i++) {

      for (let j = 0; j < 8; j++) {
        console.log(this.cells[i][j].toString());
      }
    }
  }
    
}