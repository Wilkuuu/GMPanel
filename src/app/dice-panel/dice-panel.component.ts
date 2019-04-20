import { Component, OnInit } from '@angular/core';
import { DiceService } from '../Services/dice.service';

@Component({
  selector: 'app-dice-panel',
  templateUrl: './dice-panel.component.html',
  styleUrls: ['./dice-panel.component.css']
})
export class DicePanelComponent implements OnInit {

    constructor(private diceService: DiceService) { }
    dices;
    result;
    ngOnInit() {
        this.dices = this.diceService.diceTable
    }
    roll(value) {
        this.result = this.diceService.rollDice(value);
    }

}
