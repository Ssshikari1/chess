// import Board from './board/board';

export class Game {
  constructor() {

  }

  start(): void {
    console.log("start");
    for(let i = 0; i < 8; i++) {

      for (let j = 0; j < 8; j++) {
        if (j % 2 == 0) 
          document.write(`<div class="black-cell"></div>`);
        else 
          document.write(`<div class="white-cell"></div>`);
      }
      document.write(`<br />`)
    }
  }

  pause(): void {

  }

  stop(): void {

  }
}