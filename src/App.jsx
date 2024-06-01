import FullCardDay from './compoment/FullCardDay'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Learned from './compoment/Learned'
import Heading from '../src/compoment/Heading'
function App() {
  return (
    <Router>
      <Heading/>
      <Routes>
        <Route path="/" element={<FullCardDay />} />
        <Route path="/learn-day/:id" element={<Learned />} />
      </Routes>
    </Router>
  )
}

export default App
