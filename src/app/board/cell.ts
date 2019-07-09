export default class Cell {
  
  color: string;
  position: {x: number, y: number};
  busy: boolean;

  constructor(position: {x: number, y: number}, color: string, busy: boolean = false) {
    this.color = color;
    this.busy = busy;
    this.position = position;
  }

  get getPosition(): {x: number, y: number} {
    return this.position;
  }

  get getColor(): string {
    return this.color;
  }

  get isBusy(): boolean {
    return this.busy;
  }

}