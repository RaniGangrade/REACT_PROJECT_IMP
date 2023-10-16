import './App.css';
import User from './User';
import Form from './Form';
import Colorchanger from './ColorChanger';
import PasswordGanrator from './PasswordGenrator';
function App() {
  return (
    <div className="App">
      <Colorchanger />
      <User massage ="hello"/>
      <Form />
      <PasswordGanrator />
    </div>
  );
}

export default App;

