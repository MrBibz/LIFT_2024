export interface Eolienne {
    id: number;
    nom: string;
    coordonnees: string;
    etat: string;
    vent_vitesse: number;
    vent_direction: number;
    temperature: number;
    humidite: number;
    pression: number;
    courant: number;
    vibration: number;
}