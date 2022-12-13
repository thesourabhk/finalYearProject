import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import BlogForm from './components/BlogForm';
import Contribution from './components/Contribution';
import Home from './components/Home';
import Message from './components/Message';
import Navbar from './components/Navbar';
import Service from './components/Service';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <div className="App cirlce" >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />

          {/* All PG's and hostels routes */}
          <Route path="/pg" element = {<Service key="pg" category="pg"/>} />
          <Route path="/pg/:id" element={<ServiceDetail category="pg"/>} />

          {/* All Hospitals routes */}
          <Route path="/hospital" element = {<Service key="hospital" category="hospital"/>} />
          <Route path="/hospital/:id" element={<ServiceDetail category="hospital"/>} />

          {/* All Blogs routes */}
          <Route path="/blog" element = {<Blog />} />
          <Route path="/blog/create" element = {<BlogForm />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* All contribtion routes */}
          <Route path="/contribute" element = {<Contribution />} />
          <Route path="/contribute/message" element = {<Message />} />

          
          {/* <Route path="/hostel" element = {<Service category="hostel"/>} /> */}
          <Route path="/about" element = {<About />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
