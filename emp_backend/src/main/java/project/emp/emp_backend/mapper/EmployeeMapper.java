package project.emp.emp_backend.mapper;

import project.emp.emp_backend.dto.EmployeeDto;
import project.emp.emp_backend.entity.Employee;

public class EmployeeMapper {

    // method for map to employee dto :
    public static EmployeeDto mapdto(Employee e){
        return new EmployeeDto(
                e.getId(),
                e.getFname(),
                e.getLname(),
                e.getEmail()
        );
    }

    // method for map to employee :
    public static Employee mapemp(EmployeeDto ed){
        return new Employee(
                ed.getId(),
                ed.getFname(),
                ed.getLname(),
                ed.getEmail()
        );
    }
}
