import type { Todo } from '../types/todo';
interface TodoListItems {
  todo: Todo;
  OnCompletedChange: (id: number, completed: boolean) => void;
}
const TodoListItems = ({ todo, OnCompletedChange }: TodoListItems) => {
  return (
    <div>
      <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => OnCompletedChange(todo.id, e.target.checked)}
          className="scale-125 accent-green-600"
        />
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.title}
        </span>
      </label>
    </div>
  );
};

export default TodoListItems;
