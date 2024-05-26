import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
      {todos.length === 0 && 'No Todos'}
      <ul className="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
};
