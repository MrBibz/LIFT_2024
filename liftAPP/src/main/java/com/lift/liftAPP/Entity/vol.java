package com.lift.liftAPP.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("vol")
public class vol {
    @Id
    private String id;

    private String date;
    private String description;

    public vol(String id, String date, String description) {
        super();

        this.id = id;
        this.date = date;
        this.description = description;
    }
}
