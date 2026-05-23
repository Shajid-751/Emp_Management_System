package project.emp.emp_backend.service;

import project.emp.emp_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    // for create :
    EmployeeDto createEmp(EmployeeDto e);
    // for get by id :
    EmployeeDto getById(long id);
    // for getall:
    List<EmployeeDto> getAll();
    // update
    EmployeeDto Update(long id , EmployeeDto ed);
    //delete By Id:
    void Delete(long id);
}
