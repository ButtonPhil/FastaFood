import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Page/HomePage';
import EmployPage from './Page/ListEmployPage';
import RegisterPage from './Page/RegisterPage';
import ProfilPage from './Page/ProfilPage';




function App() {

    return (

        <>

            <BrowserRouter>

                <Routes>

                    <Route path='/HomePage' element={<HomePage />} />
                    <Route path='/EmployPage' element={<EmployPage />} />
                    <Route path='/RegisterPage' element={<RegisterPage />} />
                    <Route path='/ProfilPage' element={<ProfilPage />} />

                </Routes>

            </BrowserRouter>

        </>
    )

}

export default App;