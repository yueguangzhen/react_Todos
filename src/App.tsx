import { dummyData } from './data/todos';
import type { Todo } from './types/todo';

import { useEffect, useState } from 'react';
import TodoForm from './Compentons/TodoForm';
import TodoList from './Compentons/TodoList';
import TodoSummary from './Compentons/TodoSummary';

function App() {
  const [todos, setTodos] = useState(() => {
    const saveTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    return saveTodos.length > 0 ? saveTodos : dummyData;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)),
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      { id: Date.now(), title, completed: false },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompleted() {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  }

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <TodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompleted} />
    </main>
  );
}
export default App;
