import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route>
          <Route />
          <Route />
        </Route>
        <Route />
        <Route />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      
    </>
  )
}

export default App
