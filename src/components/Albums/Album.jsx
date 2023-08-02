import React from 'react';

const Album = ({album}) => {
    return (
        <div>
            <h3>id- {album.id}</h3>
            <h3>userId - {album.userId}</h3>
            <p>title - {album.title}</p>
        </div>
    );
};

export default Album;