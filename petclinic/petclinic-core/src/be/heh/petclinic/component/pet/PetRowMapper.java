package be.heh.petclinic.component.pet;
import  be.heh.petclinic.domain.Pet;

import org.springframework.jdbc.core.RowMapper;
import java.sql.SQLException;
import java.sql.ResultSet;

public class PetRowMapper implements RowMapper<Pet> {

    @Override
    public Pet mapRow(ResultSet rs,int i) throws SQLException {
        Pet pet = new Pet();
        pet.setName(rs.getString("name"));
        pet.setBirthDate(rs.getString("birth_date"));
        pet.setType(rs.getString("type_id"));
        pet.setOwnerId(rs.getInt("owner_id"));

        return pet;
    }


}
