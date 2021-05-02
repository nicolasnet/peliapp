import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class FirePeliculasService {

  private dbpath = '/peliculas'; //ruta de la coleccion de firebase.
  peliculasRef: AngularFirestoreCollection<Pelicula>;
  peliculas:Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.peliculasRef = db.collection(this.dbpath);
    this.peliculas=this.peliculasRef.valueChanges(this.dbpath);
  }

  getAll(){
    return this.peliculas;
  }

  create(mensaje: Pelicula): any{
    console.log("Entro a funcion create");
    return this.peliculasRef.add({...mensaje});
  }

  update(id: string, data: any): Promise<void> {
    return this.peliculasRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.peliculasRef.doc(id).delete();
  }
}
