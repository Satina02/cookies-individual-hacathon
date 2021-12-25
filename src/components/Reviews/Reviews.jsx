import React, { useContext, useEffect } from 'react';
import { Comment, Tooltip, Avatar, Button, TextArea } from 'antd';
import { commentsContext } from '../../contexts/commentContext';

const Reviews = () => {
    const {getComments, comments, commendsTotalCount} = useContext(commentsContext)
    console.log("comments in details", comments);
    useEffect(() => {
        getComments()
    },[])
        return (
            <>
            comment
            {comments.map((item) => {
              <div className="new-comment" style={{marginTop:"50px"}}>
             <div style={{display:"flex", width:"80%"}}>
             <Avatar style={{marginRight:"15px"}} src={item.image} alt="Han Solo" />
             <p>{item.name}</p>
             </div>
             <br />
             <p>{item.comment}</p>
         </div>
            })}
            
          </>
        );
};

export default Reviews;