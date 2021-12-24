import React, { useReducer } from "react";
import axios from "axios";

import { CASE_GET_ONE_COMMENT, CASE_GET_COMMENTS } from "../helpers/cases";
import { COMMENTS_API } from "../helpers/consts";

export const commentsContext = React.createContext();

const INIT_STATE = {
  comments: [],
  oneComment: null,
  commendsTotalCount: 0,
};


const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CASE_GET_COMMENTS:
        return {
          ...state,
          comments: action.payload.data,
          commendsTotalCount: action.payload.headers["x-total-count"],
        };
      case CASE_GET_ONE_COMMENT:
        return { ...state, oneComment: action.payload.data };
      default:
        return state;
    }
  };
  
  const CommentsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
  
    async function createComment(newProduct) {
      await axios.post(COMMENTS_API, newProduct);
      getComments();
    }
    async function getComments() {
      let result = await axios.get(`${COMMENTS_API}${window.location.search}`);
      console.log("get comments", result);
      dispatch({
        type: CASE_GET_COMMENTS,
        payload: result,
      });
    }
  
    async function getOneComment(id) {
      let result = await axios.get(`${COMMENTS_API}/${id}`);
      dispatch({
        type: CASE_GET_ONE_COMMENT,
        payload: result,
      });
    }
  
    async function deleteComment(id) {
      await axios.delete(`${COMMENTS_API}/${id}`);
      getComments();
    }
  
    async function updateComment(id, editedProduct) {
      await axios.patch(`${COMMENTS_API}/${id}`, editedProduct);
      getComments();
    }
  
    return (
      <commentsContext.Provider
        value={{
          comments: state.comments,
          oneComment: state.oneComment,
          commendsTotalCount: state.commendsTotalCount,
          getComments,
          getOneComment,
          deleteComment,
          updateComment,
          createComment,
        }}
      >
        {children}
      </commentsContext.Provider>
    );
  };
  export default CommentsContextProvider;