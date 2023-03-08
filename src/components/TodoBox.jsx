import React, {useState, useEffect} from 'react';
import Item from "./Item";
import uniqid from "uniqid";

function TodoBox() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
    const [todoText, setTodoText] = useState(``);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleInputChange = (event) => {
        setTodoText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {id: uniqid(), inputValue: todoText};
        setTodos([...todos, newTodo]);
        setTodoText(``);
    };

    const handleRemove = (id) => (event) => {
        event.preventDefault();
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <div>
            <div className="mb-3">
                <form className="d-flex" onSubmit={handleSubmit}>
                    <div className="me-3">
                        <input type="text" value={todoText} onChange={handleInputChange} required
                               className="form-control" placeholder="I am going..."/>
                    </div>
                    <button type="submit" className="btn btn-primary">add</button>
                </form>
            </div>
            {todos.map((item) => (
                    <Item text={item.inputValue} key={item.id} id={item.id} onRemove={handleRemove}/>
                )
            ).reverse()}
        </div>
    );
}

export default TodoBox;