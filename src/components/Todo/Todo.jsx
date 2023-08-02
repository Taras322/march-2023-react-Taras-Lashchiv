import React from 'react';

const Todo = ({todo}) => {
    return (
        <div>
            <p>userId - {todo.userId}</p>
            <p>id - {todo.id}</p>
            <h3>title - {todo.title}</h3>
        </div>
    );
};

export default Todo;