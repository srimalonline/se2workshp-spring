package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.sql.Time;
import java.util.Date;

@Entity
public class Subject {
    @Id
    private int id;
    private String name;
    private int credits;

    private int start_date;
    private int end_date;

    private int duration;
}
