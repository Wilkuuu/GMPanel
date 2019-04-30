import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../Services/player.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-player-panel.component.html',
  styleUrls: ['./add-player-panel.component.css']
})
export class AddPlayerPanelComponent implements OnInit {
  raceArray = [];
  classArray = [];
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

}
