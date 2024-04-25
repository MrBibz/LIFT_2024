package com.lift.liftAPP.Mapper;

import com.lift.liftAPP.Entity.entity;
import com.lift.liftAPP.DTO.DTO;

public class mapper {
    entity mapToEntity(DTO dto) {
        return new entity(dto.id(), dto.vent_vitesse(), dto.vent_direction(), dto.humidite(), dto.temperature(), dto.nom(), dto.etat());
    }

    DTO mapToDTO(entity entity) {
        return new DTO(entity.getId(), entity.getVent_vitesse(), entity.getVent_direction(), entity.getHumidite(), entity.getTemperature(), entity.getNom(), entity.getEtat());
    }
}
