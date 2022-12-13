import { PerrosModel } from "./PerrosModel";

export interface SolicitudesModel{
    fecha: string;
    id: number;
    idPerro: number;
    idUsuario: number;
    solicitudes: PerrosModel[];
}