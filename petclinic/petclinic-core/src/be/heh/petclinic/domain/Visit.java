package be.heh.petclinic.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;


public class Visit extends BaseEntity {

    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private LocalDate date;

    private String description;

    private Pet pet;


    public Visit() {
        this.date = LocalDate.now();
    }

    public LocalDate getDate() {
        return this.date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Pet getPet() {
        return this.pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

}
