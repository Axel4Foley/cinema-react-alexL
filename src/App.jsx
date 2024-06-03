
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './Features/Home/Home'
import { Cinemas } from './Features/Cinemas/Cinemas'
import { CreateCinema } from './Features/CreateCinema/CreateCinema'


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='cinemas'>
          <Route path='' element={<Cinemas/>}></Route>
            <Route path='create' element={<CreateCinema/>}></Route>
          {/* <Route path=':cinemaId'>
            <Route path='' element={<CinemaId/>}></Route>
            <Route path=''>
              <Route path='films' element={<Films/>}></Route>
            </Route>
          </Route> */}

        </Route>
        

        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
