import logo from './logo.svg';
import penguin1 from './pg1.gif';
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{color:'yellow'}}>
        PENGUIN CITY
      </h1>
      <img src={penguin1} alt='funny penguin gif'/>
      <h2 className='text'>
        Interesting facts about penguins:
      </h2>
      <ul>
        <li className='text'>Penguins have four legs.</li>
        <li className='text'>Penguins are mammals.</li>
        <li className='text'>Penguins are capable of complex thought.</li>
        <li className='text'>Penguins are coming for you.</li>
      </ul>
    </div>
  );
}

export default App;
