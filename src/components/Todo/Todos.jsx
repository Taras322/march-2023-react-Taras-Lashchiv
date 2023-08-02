import React, {useEffect, useState} from 'react';
import Todo from "./Todo";


const Todos = () => {

    const [todo, setTodo] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => setTodo(value))
    },[])

    return (
        <div>
            {
                todo.map(todo=>(<Todo key={todo.id} todo={todo}/>))
            }
        </div>
    );
};

export default Todos;