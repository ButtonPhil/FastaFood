import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Page/HomePage';




function App() {

    return (

        <>

            <BrowserRouter>

                {/* <NavBar /> */}

                <Routes>

                    <Route path='/HomePage' element= {<HomePage/>} />

                </Routes>

            </BrowserRouter>

        </>
    )

}

export default App;