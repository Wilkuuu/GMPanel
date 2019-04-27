import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../Services/player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private playerService: PlayerService) { }

    characterList;
    ngOnInit() {
       // this.playerService.getCharacter().subscribe(res => {
       //     console.log(res, 'test');
       //     // this.characterList = res;
       // });
    }


}
