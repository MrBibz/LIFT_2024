import { Eolienne } from '../interfaces/eolienne';

let hard_coded_eoliennes: Eolienne[] = [
    {
        id: 1,
        nom: "Éolienne 1",
        coordonnees: "48.8566° N, 2.3522° E",
        etat: "running",
        vent_vitesse: 10,
        vent_direction: 90,
        temperature: 20,
        humidite: 50,
        pression: 1000,
        courant: 10,
        vibration: 0
    },
    {
        id: 2,
        nom: "Éolienne 2",
        coordonnees: "40.7128° N, 74.0060° W",
        etat: "stopped",
        vent_vitesse: 5,
        vent_direction: 180,
        temperature: 15,
        humidite: 60,
        pression: 990,
        courant: 5,
        vibration: 1
    },
    {
        id: 3,
        nom: "Éolienne 3",
        coordonnees: "34.0522° N, 118.2437° W",
        etat: "running",
        vent_vitesse: 12,
        vent_direction: 270,
        temperature: 25,
        humidite: 45,
        pression: 1010,
        courant: 8,
        vibration: 2
    },
    {
        id: 4,
        nom: "Éolienne 4",
        coordonnees: "51.5074° N, 0.1278° W",
        etat: "danger",
        vent_vitesse: 15,
        vent_direction: 45,
        temperature: 18,
        humidite: 55,
        pression: 995,
        courant: 12,
        vibration: 0.5
    },
    {
        id: 5,
        nom: "Éolienne 5",
        coordonnees: "35.6895° N, 139.6917° E",
        etat: "warning",
        vent_vitesse: 8,
        vent_direction: 135,
        temperature: 22,
        humidite: 60,
        pression: 1005,
        courant: 10,
        vibration: 0.8
    },
    {
        id: 6,
        nom: "Éolienne 6",
        coordonnees: "39.9042° N, 116.4074° E",
        etat: "running",
        vent_vitesse: 10,
        vent_direction: 180,
        temperature: 20,
        humidite: 50,
        pression: 1000,
        courant: 10,
        vibration: 0
    },
    {
        id: 7,
        nom: "Éolienne 7",
        coordonnees: "55.7558° N, 37.6173° E",
        etat: "running",
        vent_vitesse: 14,
        vent_direction: 225,
        temperature: 16,
        humidite: 40,
        pression: 995,
        courant: 11,
        vibration: 1.2
    },
    {
        id: 8,
        nom: "Éolienne 8",
        coordonnees: "19.0760° N, 72.8777° E",
        etat: "warning",
        vent_vitesse: 9,
        vent_direction: 315,
        temperature: 26,
        humidite: 65,
        pression: 1015,
        courant: 9,
        vibration: 0.6
    },
    {
        id: 9,
        nom: "Éolienne 9",
        coordonnees: "41.8781° N, 87.6298° W",
        etat: "running",
        vent_vitesse: 11,
        vent_direction: 270,
        temperature: 19,
        humidite: 45,
        pression: 1003,
        courant: 9,
        vibration: 1.5
    },
    {
        id: 10,
        nom: "Éolienne 10",
        coordonnees: "22.3193° N, 114.1694° E",
        etat: "danger",
        vent_vitesse: 13,
        vent_direction: 90,
        temperature: 23,
        humidite: 55,
        pression: 1008,
        courant: 11,
        vibration: 0.7
    }
];

export default hard_coded_eoliennes;