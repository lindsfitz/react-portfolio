
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe';
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio';

const App = () => {
return (
<div>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<AboutMe />} />
      <Route path='contact' element={<Contact />} />
      <Route path='projects' element={<Portfolio />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  
</div>
)}

export default App;
