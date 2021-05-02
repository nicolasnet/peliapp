import { Actor } from "./actor";

export class Pelicula {
    id: number;
    nombre: string;
    tipo: string;
    fechaDeEstreno: Date;
    cantidadPublico: number;
    fotoDePelicula: string;
    actores?: Array<Actor>;
}
