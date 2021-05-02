import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicioFirebaseService {

  private dbpath: string = '/';
  dataRef: AngularFirestoreCollection<any>

  constructor(private db: AngularFirestore) {
    this.dataRef = db.collection(this.dbpath);
  }


}
