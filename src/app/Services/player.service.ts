import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  collection = 'characters';
  characters;
  character;
  race = ['Human', 'Orc', 'Elf', 'Dwarf'];
  class = ['Warrior', 'Mage', 'Rogue', 'Ranger'];



  constructor(private afs: AngularFirestore) {
    this.characters = afs.collection('characters').ref;
      // this.characters = this.afb.list('/characters');
       console.log('characters', this.characters);
  }



}
