package be.heh.petclinic.domain;

import java.util.ArrayList;
import java.util.List;

public class Vets {

    private List<Vet> vets;

    public List<Vet> getVetList() {
        if (vets == null) {
            vets = new ArrayList<>();
        }
        return vets;
    }

}