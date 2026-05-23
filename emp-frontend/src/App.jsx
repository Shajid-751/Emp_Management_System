

import './App.css'
import Addemp from './Component/Addemp'
import Footer from './Component/Footer'
import Header from './Component/Header'
import ListEmp from './Component/ListEmp'
import Hello from './Hello'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
function App() {
  

  return (
    <>
    {/* give all in br */}
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* application load 1st time , it  render listEmp */}
        <Route path='/' element={<ListEmp/>}></Route>
        {/* List all Employees */}
        <Route path='/employees' element={<ListEmp/>}></Route>
        {/* add employee */}
        <Route path='/add-employee' element={<Addemp/>}></Route>
        <Route path='/update-emp/:id' element={<Addemp/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
