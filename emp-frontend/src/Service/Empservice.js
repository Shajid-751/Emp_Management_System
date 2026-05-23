import axios from "axios";

    //take the base URL:
const URL = "http://localhost:8085/api/employees"
// it will send the url to get all datas to axios:
export const listemp=()=>axios.get(URL);

// it will send the url and employee detail to create the given employee details to axios:
export const createemp=(e)=> axios.post(URL,e);

//get the employee details using id :
export const getemp=(id)=> axios.get(URL + "/" + id);

//update the employee using id and emp object:
export const updateemp=(id,emp)=> axios.put(URL + "/" + id, emp)

//delete employee using id ;
export const deleteemp=(id)=> axios.delete(URL + "/" + id);