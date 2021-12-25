import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { useAuth } from "../../contexts/authContext";
import { commentsContext } from "../../contexts/commentContext";
import CommItem from "./CommItem";

const Comments = ({id}) => {
    const {user: {email}} = useAuth();
  const { getComments, deleteComment, comments } = useContext(commentsContext);
  console.log("comments in emir", comments);
  useEffect(() => {
    getComments(id);
  }, [id]);
    return (
        < div style={{ display:"flex"}}>
        <div style={{textAlign:"center", width:"50%"}}>
            <h3 style={{marginTop:"20px"}}>
                Reviews <img style={{width:"50px"}} src="https://cdn-icons.flaticon.com/png/512/2065/premium/2065224.png?token=exp=1640457973~hmac=f503415aaa15fed65c320bd97b517549" alt="" />
            </h3>
             <List
      className="demo-loadmore-list items-list"
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(item) => (
        <List.Item
          actions={email === "talaibekova_s@iuca.kg"?[
            <button key="list-loadmore-edit" onClick={() => deleteComment(item.id, id)}>
              delete
            </button>,
          ]:null}
        >
          <List.Item.Meta
            title={
            <p>
                {<p>{{email} ? <span> {item.email}</span> : <span>Гость</span>} </p>}
                {item.comment}
            </p>
        }
          />
        </List.Item>
        
      )}
    />
    <CommItem/>
     </div>
        <div style={{textAlign:"center", width:"50%", marginTop:"20px"}}>
            <img style={{ width:"80%"}} src="https://media.istockphoto.com/vectors/review-feedback-vector-illustration-cartoon-tiny-people-reviewing-vector-id1250143028?k=20&m=1250143028&s=170667a&w=0&h=mJekDFC2dBL3d1CdvJdGDWw87hTArZUumg-gc_Deqm8=" alt="" />
            <img  style={{ width:"80%"}} src="https://static.vecteezy.com/system/resources/previews/002/800/102/original/user-reviews-and-feedback-vector.jpg" alt="" />
        </div>
        <br />
        <hr />

        </div>
    );
};

export default Comments;