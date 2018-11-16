package be.heh.petclinic.component.vet;
import  be.heh.petclinic.domain.Vet;

import org.springframework.jdbc.core.RowMapper;
import java.sql.SQLException;
import java.sql.ResultSet;

public class VetRowMapper implements RowMapper<Vet> {

    @Override
    public Vet mapRow(ResultSet rs,int i) throws SQLException {
        Vet vet = new Vet();
        vet.setLastName(rs.getString("last_name"));
        vet.setFirstName(rs.getString("first_name"));
        vet.addSpecialty(rs.getString("speciality"));
        return vet;
    }


}