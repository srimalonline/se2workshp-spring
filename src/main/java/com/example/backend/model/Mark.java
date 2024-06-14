package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Mark {
    @Id
    private int id;

    private String subject;
    int mark;


}
