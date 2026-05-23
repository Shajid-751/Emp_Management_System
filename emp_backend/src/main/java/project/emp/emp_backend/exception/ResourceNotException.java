package project.emp.emp_backend.exception;

// handle the runtime exception
public class ResourceNotException extends RuntimeException{
    public ResourceNotException(String s){
        super(s);
    }
}
