import './App.css';
// import {Header, MainContainer, CreateContainer} from './component';
import { Routes, Route } from 'react-router-dom';
import MainContainer from './component/MainContainer';
import CreateContainer from './component/CreateContainer';
import Header from './component/Header';

function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header/>
      <main className="mt-16 md:mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer/>} />
            <Route path="/createItem" element={<CreateContainer/>} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
