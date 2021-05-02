import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Actor } from '../clases/actor';

@Injectable({
  providedIn: 'root'
})
export class FireActoresService {

  private dbpath = '/actores'; //ruta de la coleccion de firebase.
  actoresRef: AngularFirestoreCollection<Actor>;
  actores:Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.actoresRef = db.collection(this.dbpath);
    this.actores=this.actoresRef.valueChanges(this.dbpath);
  }

  getAll(){
    return this.actores;
  }

  create(mensaje: Actor): any{
    console.log("Entro a funcion create");
    return this.actoresRef.add({...mensaje});
  }

  update(id: string, data: any): Promise<void> {
    return this.actoresRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.actoresRef.doc(id).delete();
  }
}
