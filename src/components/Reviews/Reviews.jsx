import React, { useContext, useEffect } from 'react';
import { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { commentsContext } from '../../contexts/commentContext';

const Reviews = () => {
    const {getComments, comments, commendsTotalCount} = useContext(commentsContext)
    console.log("comments", comments);
    // console.log("get comments from review", getComments);
    useEffect(() => {
        getComments()
    },[])
        const [likes, setLikes] = useState(0);
        const [dislikes, setDislikes] = useState(0);
        const [action, setAction] = useState(null);
      
        const like = () => {
          setLikes(1);
          setDislikes(0);
          setAction('liked');
        };
      
        const dislike = () => {
          setLikes(0);
          setDislikes(1);
          setAction('disliked');
        };
      
        const actions = [
          <Tooltip key="comment-basic-like" title="Like">
            <span onClick={like}>
              {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
              <span className="comment-action">{likes}</span>
            </span>
          </Tooltip>,
          <Tooltip key="comment-basic-dislike" title="Dislike">
            <span onClick={dislike}>
              {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
              <span className="comment-action">{dislikes}</span>
            </span>
          </Tooltip>,
          <span key="comment-basic-reply-to">Reply to</span>,
        ];
      
        return (
            <>
            comme
            {comments.map((item) => {
                <Comment
                actions={actions}
                author={<a>{item.name}</a>}
                avatar={<Avatar src={item.image} alt="" />}
                content={
                  <p>
                    {item.comment}
                  </p>
                }
                datetime={
                  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip> 
                }
              />
            })}
          </>
        );
};

export default Reviews;