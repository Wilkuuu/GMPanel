import {Component, OnInit} from '@angular/core';
import {DiceService} from '../Services/dice.service';
import {ResultArray} from '../Model/ResultArray';

@Component({
    selector: 'app-dice-panel',
    templateUrl: './dice-panel.component.html',
    styleUrls: ['./dice-panel.component.css']
})
export class DicePanelComponent implements OnInit {

    constructor(private diceService: DiceService) {
    }

    dices;
    result;
    globalResultArray: ResultArray = {
        k4: [],
        k6: [],
        k8: [],
        k10: [],
        k12: [],
        k20: [],
        k100: []
    };


    ngOnInit() {
        this.dices = this.diceService.diceTable;
    }

    roll(value) {
        const typeOfDice = 'k' + value;
        this.result = this.diceService.rollDice(value);
        this.globalResultArray[typeOfDice].push(this.result);

    }

    clearResultArray() {
        this.globalResultArray = {
            k4: [],
            k6: [],
            k8: [],
            k10: [],
            k12: [],
            k20: [],
            k100: []
        };
        this.result = null;
    }


}
