import './App.css';
import CharactersList from './pages/CharactersList';
import { Routes, Route } from 'react-router';
import Character from './pages/Character';
import Search from './pages/Search';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route strict path="/" element={<CharactersList />} />
        <Route strict path="/search" element={<Search />} />
        <Route strict path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
