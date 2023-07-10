import React from 'react';

const DetailsPost = ({post}) => {
    const {id,title,body} = post;
    return (
        <div className={'detailsDiv'}>
            <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            </div>
        </div>
    );
};

export default DetailsPost;