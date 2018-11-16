package be.heh.petclinic.component.pet;

import be.heh.petclinic.domain.Pet;

import java.util.Collection;

public interface PetComponent {

    Collection<Pet> getPets();
}
