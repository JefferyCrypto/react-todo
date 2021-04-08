import logo from './logo.svg';
import './App.css';
import TodoList from './components/visible-todo-list'
import Footer from './components/footer'
import AddTodo from './components/add-todo'

function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
