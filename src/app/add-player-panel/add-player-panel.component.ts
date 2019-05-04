import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../Services/player.service';
import {NgForm} from '@angular/forms';
import {Character} from '../Model/Character';

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
  character: Character = {strange: 10, intelligence:10, charisma: 10, condidtion: 10 , dexterity: 10};
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.raceArray = this.playerService.race;
    this.classArray = this.playerService.class;
    console.log(this.raceArray, this.classArray)
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
    //  this.playerService.addPlayerToFile(value);
  }

  checkValue () {
    console.log(this.startValue,this.character.strange);
    if (this.startValue < 0 ) {
      console.log('block');
    } else {
      console.log('chcange value');
    }
  }

}
