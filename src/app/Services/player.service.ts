import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Character} from '../Model/Character';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  characterCollection: AngularFirestoreCollection<Character>;
  characterDoc: AngularFirestoreDocument<Character>;
  characters: Observable<Character[]>;
  character: Observable<Character>;

  constructor(private afs: AngularFirestore) {
    this.characterCollection = this.afs.collection('characters', ref => {
      ref.orderBy('name', 'asc')
    });
  }

  addPlayerToFile(PlayerObject) {
    console.log('playerObject', PlayerObject);
  }

  getCharacter(): Observable<Character[]> {
    this.characters = this.characterCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(action => {
        const  data = action.payload.doc.data() as Character;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
    return this.characters;
  }

}
