package com.lift.liftAPP.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("eolienne")
public class entity {

    public static enum etat {
        EN_MARCHE,
        EN_PANNE,
        EN_ATTENTE,
        EN_REPARATION
    }

    @Id
    private String id;
    
    private double vent_vitesse;
    private int vent_direction;
    private double humidite;
    private double temperature;
    private String nom;
    private etat etat;

    public entity(String id, double vent_vitesse, int vent_direction, double humidite, double temperature, String nom, etat etat) {    
        super();

        this.id = id;
        this.vent_vitesse = vent_vitesse;
        this.vent_direction = vent_direction;
        this.humidite = humidite;
        this.temperature = temperature;
        this.nom = nom;
        this.etat = etat.EN_ATTENTE;
    }

    public etat getEtat() {
        return etat;
    }

    public double getHumidite() {
        return humidite;
    }

    public String getId() {
        return id;
    }
    
    public String getNom() {
        return nom;
    }
    
    public double getTemperature() {
        return temperature;
    }
    
    public int getVent_direction() {
        return vent_direction;
    }
    
    public double getVent_vitesse() {
        return vent_vitesse;
    }
    
    public void setEtat(etat etat) {
        this.etat = etat;
    }
    
    public void setHumidite(double humidite) {
        this.humidite = humidite;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public void setNom(String nom) {
        this.nom = nom;
    }
    
    public void setTemperature(double temperature) {
        this.temperature = temperature;
    }
    
    public void setVent_direction(int vent_direction) {
        this.vent_direction = vent_direction;
    }
    
    public void setVent_vitesse(double vent_vitesse) {
        this.vent_vitesse = vent_vitesse;
    }
    
}