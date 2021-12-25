import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_COMMENTS } from "../helpers/cases";
import { COMMENTS_API } from "../helpers/consts";

export const commentsContext = React.createContext();

const INIT_STATE = {
  comments: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_COMMENTS:
      return { ...state, comments: action.payload.data };
    default:
      return state;
  }
};

  const CommentsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createComment(newComment, productId ,email) {
    await axios.post(COMMENTS_API, newComment);
    getComments(productId);
  }
  async function getComments(productId) {
    let result = await axios.get(COMMENTS_API + `/?productId=${productId}`);
    dispatch({
      type: CASE_GET_COMMENTS,
      payload: result,
    });
  }

  async function deleteComment(id, productId) {
    await axios.delete(`${COMMENTS_API}/${id}`);
    getComments(productId);
  }
 
    return (
      <commentsContext.Provider
      value={{
        comments: state.comments,
        getComments,
        deleteComment,
        createComment,
      }}
      >
        {children}
      </commentsContext.Provider>
    );
  };
  export default CommentsContextProvider;