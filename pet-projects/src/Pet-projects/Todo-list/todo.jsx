import React from "react";


function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('Секс (');

    const handeAddTodo = () => {
        if (newTodo.trim() === '') return;
        setTodos([...todos, { text: newTodo, compelted: false }])
        setNewTodo('');
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index)
        setTodos(updatedTodos);
    };

    const handleToggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) =>
            i === index ? { ...todo, compelted: !todo.compelted } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div className="todo">
            <div className="todo_info">
                <h2>Заметки</h2>
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)
                }
                    placeholder="Добавить заметку" />
                <button onClick={handeAddTodo}>Добавить</button>
            </div>
            <TodoList
                todos={todos}
                onDeleleteTodo={handleDeleteTodo}
                onToggleComplete={onToggleComplete}
            />
            <div className="td">
                <ul>
                    {todos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            todo={todo}
                            index={index}
                            onDelete={() => onDeleteTodo(index)}
                            onToggleComplete={() => onToggleComplete(index)}
                        />
                    ))}
                </ul>
            </div>
        </div>

    )
}