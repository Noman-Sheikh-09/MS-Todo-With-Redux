import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar'
import MyDay from './pages/myDay/MyDay'
function App() {
  return (
    <div className="App">
     <Navbar 
     title='To Do' />
    <MyDay/>
    </div>
  );
}

export default App;
