package project.emp.emp_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.emp.emp_backend.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
