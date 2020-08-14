import {BoardPrinter} from './boardPrinter'

export class Game {
    constructor() {
        
    }

    updateDisplay(): void{
        BoardPrinter.titleBar(150)
    }
}