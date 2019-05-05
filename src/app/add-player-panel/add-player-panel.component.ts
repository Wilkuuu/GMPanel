import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../Services/player.service';
import {NgForm} from '@angular/forms';
import {Character} from '../Model/Character';
import {formArrayNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
    selector: 'app-add-panel',
    templateUrl: './add-player-panel.component.html',
    styleUrls: ['./add-player-panel.component.css']
})
export class AddPlayerPanelComponent implements OnInit {
    raceArray = [];
    classArray = [];
    startValue = 30;
    characterValue = 0;
    character: Character = {strange: 10, intelligence: 10, charisma: 10, condidtion: 10, dexterity: 10};

    constructor(private playerService: PlayerService) {
    }

    ngOnInit() {
        this.raceArray = this.playerService.race;
        this.classArray = this.playerService.class;
        console.log(this.raceArray, this.classArray);
    }

    onSubmit(form: NgForm) {
        console.log(form.value);
        form.reset();
        //  this.playerService.addPlayerToFile(value);
    }

    checkValue() {
        this.characterValue = (this.character.strange - 10) + (this.character.intelligence - 10) + (this.character.dexterity - 10) + (this.character.charisma - 10) + (this.character.condidtion - 10);
        console.log(this.startValue, this.character.strange);
        if ((this.startValue - this.characterValue) < 0) {
            console.log('block');
        } else {
            console.log('chcange value');
        }
    }

    resetForm() {

        this.character = {strange: 10, intelligence: 10, charisma: 10, condidtion: 10, dexterity: 10};
        this.startValue = 30;
    }

    showModify(x) {
        // TODO Logika do ustalenia mofdyfikatorów
        if (x < 4) {
            return -3;
        }
        if (x < 7) {
            return -2;
        }
        if (x < 9) {
            return -1;
        }
        if (x < 12) {
            return 0;
        }
        if (x < 13) {
            return 1;
        }
        if (x < 16) {
            return 2;
        }
        if (x < 18) {
            return 3;
        }
        if (x < 20) {
            return 4;
        }
        else
            return 5;
    }


}
