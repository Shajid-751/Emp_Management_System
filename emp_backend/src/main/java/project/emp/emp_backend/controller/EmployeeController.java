package project.emp.emp_backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.emp.emp_backend.dto.EmployeeDto;
import project.emp.emp_backend.service.EmployeeService;

import java.util.List;

@CrossOrigin("*") // it will allow any request(port) from frontend to hit the backend server

@RestController
@AllArgsConstructor
@RequestMapping("/api/employees")
public class EmployeeController {

    //instance for employeeService :
     private EmployeeService es;

     //api for create:
    @PostMapping
    public ResponseEntity<EmployeeDto> CrEmp(@RequestBody EmployeeDto ed){
        // sent the dto to create method in service
        EmployeeDto emdt = es.createEmp(ed);
        // return the created dto :
        return new ResponseEntity<>(emdt, HttpStatus.CREATED);
    }

    // api for get by id :
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getid(@PathVariable("id") long id){
        //send to getbyid method from employeedto:
        EmployeeDto ed=es.getById(id);
        return new ResponseEntity<>(ed,HttpStatus.OK);
    }

    //api for get All :
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getFull(){
        // take the list of employees in employeedto:
        List<EmployeeDto> le=es.getAll();
        // return the dto:
        return new ResponseEntity<>(le,HttpStatus.OK);
    }

    //api for update :
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> Updatedto(@PathVariable("id") long id , @RequestBody EmployeeDto ed){
        EmployeeDto e=es.Update(id,ed);
        return new ResponseEntity<>(e,HttpStatus.OK);
    }

    //api for delete :
    @DeleteMapping("{id}")
    public  ResponseEntity<String> deleted(@PathVariable("id") long id){
        // send to delete method:
        es.Delete(id);
        return new ResponseEntity<>("Deleted SuccessFully",HttpStatus.OK);
        //(or):
        // return ResponseEntity.ok("Deleted SuccessFully");
    }
}
