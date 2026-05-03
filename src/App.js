import Header from './components/header';
import ChatWidget from './components/ChatWidget';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <ChatWidget />
    </div>
  );
}

export default App;
