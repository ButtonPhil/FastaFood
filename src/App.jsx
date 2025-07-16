import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Page/HomePage';
import EmployPage from './Page/ListEmployPage';
import RegisterPage from './Page/RegisterPage';




function App() {

    return (

        <>

            <BrowserRouter>

                {/* <NavBar /> */}

                <Routes>

                    <Route path='/HomePage' element= {<HomePage/>} />
                    <Route path='/EmployPage' element = {<EmployPage />} />
                    <Route path='/RegisterPage' element = {<RegisterPage />} />

                </Routes>

            </BrowserRouter>

        </>
    )

}

export default App;