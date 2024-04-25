package com.lift.liftAPP.DTO;

import com.lift.liftAPP.Entity.entity;

public record DTO(String id, double vent_vitesse, int vent_direction, double humidite, double temperature, String nom, entity.etat etat) { }
