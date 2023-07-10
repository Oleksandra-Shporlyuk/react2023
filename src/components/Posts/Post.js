import React, {useState} from 'react';
import DetailsPost from "./DetailsPost";

const Post = ({post}) => {
    let [isShow,setIsShow] = useState(false);
    const {id,title} = post;
    return (
        <div>
            <div className={'postDiv'}>{id} {title}
            <div className={'btnDiv'}>
                <button className={'btn'} onClick={()=> setIsShow(prev => !prev)}>{isShow ? 'Hide':'Show'}</button>
            </div>
                {
                isShow && <DetailsPost post={post}/>
            }
            </div>
        </div>
    );
};

export default Post;