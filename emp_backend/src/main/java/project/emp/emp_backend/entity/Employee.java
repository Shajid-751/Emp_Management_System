package project.emp.emp_backend.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// using this annotation , spring will create
@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "employees") // it will create a table named as "employees"
public class Employee {

    @Id
    @GeneratedValue()
    private long id;
    // it will create the column as given name :
    @Column(name = "First_Name")
    private String Fname;
    @Column(name = "Last_Name")
    private String Lname;
    // create a column using the given name , it don't leave it as null and the email will be unique
    @Column(name = "Email",nullable = false,unique = true)
    private String email;

}
