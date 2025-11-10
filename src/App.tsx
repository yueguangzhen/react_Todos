import { dummyData } from './data/todos';
import TodoListItems from './Compentons/TodoListItems';
import { useState } from 'react';
import TodoForm from './Compentons/TodoForm';
function App() {
  const [todos, setTodos] = useState(dummyData);
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
    );
  }
  function addTodo(title: string) {
    setTodos((prevTodos) => [
      { id: prevTodos.length + 1, title, completed: false },
      ...prevTodos,
    ]);
  }
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <TodoForm onSubmit={addTodo} />
        <div className="space-y-2">
          {todos.map((todo) => (
            <TodoListItems
              key={todo.id}
              todo={todo}
              OnCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
export default App;
