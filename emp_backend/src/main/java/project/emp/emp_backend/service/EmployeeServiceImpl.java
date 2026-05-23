package project.emp.emp_backend.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import project.emp.emp_backend.dto.EmployeeDto;
import project.emp.emp_backend.entity.Employee;
import project.emp.emp_backend.exception.ResourceNotException;
import project.emp.emp_backend.mapper.EmployeeMapper;
import project.emp.emp_backend.repository.EmployeeRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

    //instance for repository:
    private EmployeeRepository er;

    // Create :
    @Override
    public EmployeeDto createEmp(EmployeeDto e) {

        //map to empdto:
        Employee em= EmployeeMapper.mapemp(e);
        // to repository:
        Employee createEmp=er.save(em);
        //map to emp:
        return EmployeeMapper.mapdto(createEmp);
    }

    // get by id :
    @Override
    public EmployeeDto getById(long id) {
        // to repository :
        // findbyid is a option. if not found we have to handle it
        Employee e=er.findById(id).
                orElseThrow(()-> new ResourceNotException("Employee Not Found for Given id : " + id));
        return EmployeeMapper.mapdto(e);
    }

    // get All :
    @Override
    public List<EmployeeDto> getAll() {
        // employees in list :
        List<Employee> em=er.findAll();
        //map each employee to the mapper in the list:
        return em.stream().map((e)->EmployeeMapper.mapdto(e)).collect(Collectors.toList());
    }

    // Update :
    @Override
    public EmployeeDto Update(long id, EmployeeDto ed) {
        // get the employee:
        Employee em=er.findById(id).orElseThrow(()-> new ResourceNotException("Employee Not Found for Given Id : " + id));
        //update it :
        em.setFname(ed.getFname());
        em.setLname(ed.getLname());
        em.setEmail(ed.getEmail());
        //save the updated employee in that data:
        Employee e=er.save(em);
        // map to dto:
        return EmployeeMapper.mapdto(e);
    }

    // delete by id :
    @Override
    public void Delete(long id) {
        Employee e=er.findById(id).orElseThrow(()-> new ResourceNotException("Employee Not Found"));
        er.deleteById(id);
    }

}
