import logo from './logo.svg';
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      
       <ul className='nav-list'>
         <li><a href='http://localhost:3000/'>Home </a></li>
         <li><a href='http://localhost:3000/'>Events </a></li>
         <li><a href='http://localhost:3000/'>Reviews </a></li>
       </ul>
       <AppRouter/>
    </div>
  );
}

export default App;
