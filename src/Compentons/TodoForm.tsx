import { useState } from 'react';
interface TodoFormProps {
  onSubmit: (title: string) => void;
}
const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [inputText, setInputText] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSubmit(inputText); //call addTodo() at App
    setInputText('');
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="What needs to be done?"
        className="rounded-s-md grow border border-gray-400 p-2"
      ></input>
      <button
        type="submit"
        className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
};
export default TodoForm;
