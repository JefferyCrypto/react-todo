import logo from './logo.svg';
import './App.css';
import TodoList from './components/visible-todo-list'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
