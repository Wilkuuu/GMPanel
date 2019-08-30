import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Character} from '../Model/Character';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  collection = 'characters';
  characterRef = this.afs.collection(this.collection);
  race = ['Human', 'Orc', 'Elf', 'Dwarf'];
  class = ['Warrior', 'Mage', 'Rouge', 'Ranger'];

  // characterCollection: AngularFirestoreCollection<Character>;
  // characterDoc: AngularFirestoreDocument<Character>;
  // charactersArray: Observable<Character[]>;
  // character: Observable<Character>;

  constructor(private afs: AngularFirestore) {
    console.log('playerservice', this.characterRef)
    this.afs.collection(this.collection).get().subscribe((el) => {
      console.log(el);
    });
  }




  addPlayerToFile(PlayerObject) {
    console.log('playerObject', PlayerObject);
  }

  // getCharacter(): Observable<Character[]> {
  //   this.characters = this.characterCollection.snapshotChanges().pipe(map(changes => {
  //     return changes.map(action => {
  //       const  data = action.payload.doc.data() as Character;
  //       data.id = action.payload.doc.id;
  //       return data;
  //     });
  //   }));
  //   return this.characters;
  // }

}
