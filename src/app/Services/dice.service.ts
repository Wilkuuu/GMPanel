import { Injectable } from '@angular/core';
import { Dice } from '../Model/Dice';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
    diceTable = [
        {name: 'k4', value: 4},
        {name: 'k6', value: 6},
        {name: 'k8', value: 8},
        {name: 'k10', value: 10},
        {name: 'k12', value: 12},
        {name: 'k20', value: 20},
        {name: 'k100', value: 100},
        ];
    dice: Dice;

    constructor() {
    }


    addDice(value, name) {
      this.dice.name = name;
      this.dice.value = value;
      this.diceTable.push(this.dice);
    }

    rollDice(value): number {
       return Math.floor((Math.random() * value) + 1);
    }
}

