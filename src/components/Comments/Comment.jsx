import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h3>id - {comment.id}</h3>
            <h3>name - {comment.name}</h3>
            <p>body - {comment.body}</p>
        </div>
    );
};

export default Comment;