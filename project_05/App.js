import './App.css'
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';

const App = () => {
  

  return (
    <div className="App">

      <AddTodo/>
      <Todos/>
    </div>
  );
};

export default App;

