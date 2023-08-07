import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
//import Topback from './components/Topback';
import Main from './pages/Main';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
      <Main />
    </div >
  );
}

export default App;
