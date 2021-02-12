import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddItems from './Component/AddItems';
import ListTask from './Component/ListTask';

function App() {
  return (
    <div className="App">
     <AddItems/>
     <ListTask/>
    </div>
  );
}

export default App;
