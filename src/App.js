// import React from 'react';
// import './App.css'


// import Header from './components/common/heading/Header';
// import Home from './components/Home'

// import {BrowserRouter as Router,Switch, Route} from "react-router-dom";


// function App() {
//   return (
//     <>
//     <Router>
//     <Header/>
//         <Switch>
//           <Route path='/' exact component = {Home}/>
//         </Switch>
//     </Router>
//     </>
//   );
// }

// export default App;





























import React from 'react';
import './App.css';



import Header from './components/common/heading/Header';
     


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { CourseHome } from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Price from './components/Pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<CourseHome />} />
        <Route path='/team' element={<Team />} />
        <Route path='/pricing' element={<Price/>} />
        <Route path='/journal' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
         <Footer/>
    </Router>
  );
}

export default App;
