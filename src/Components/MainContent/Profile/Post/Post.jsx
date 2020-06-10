import React from 'react';
import x from './Post.module.scss';



const Post = (props) => {
	return (
		<div className={x.post}>
			<div className={x.post_text}>{props.postText}</div>
			<div className={x.post_likes}>{props.likeCount}</div>
			<img src="https://pngimg.com/uploads/like/like_PNG51.png" alt=""/>
		</div>
	);
};

export default Post;