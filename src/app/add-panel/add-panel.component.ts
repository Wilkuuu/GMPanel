import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../Services/player.service';
import {formArrayNameProvider} from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.css']
})
export class AddPanelComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  onSubmit({valid, value}){
    console.log(value);
    this.playerService.addPlayerToFile(value);
  }

}
