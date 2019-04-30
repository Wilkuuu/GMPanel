import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  collection = 'characters';
  characterRef = this.afs.collection(this.collection);
  race = ['Human', 'Orc', 'Elf', 'Dwarf'];
  class = ['Warrior', 'Mage', 'Rogue', 'Ranger'];



  constructor(private afs: AngularFirestore) {

  }

  addPlayerToFile(PlayerObject) {
    console.log('playerObject', PlayerObject);
  }


}
