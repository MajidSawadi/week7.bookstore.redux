import { toast } from "react-toastify";

import * as types from "../constants/books.constants";

import api from "../../apiService";

const getBooks = (pageNum, limit, query) => async (dispatch) => {
  dispatch({ type: types.GET_BOOKS_REQUEST, payload: null });
  try {
    let url = `${process.env.REACT_APP_BACKEND_API}/books?_page=${pageNum}&_limit=${limit}`;
    if (query) url += `&q=${query}`;

    const data = await api.get(url);
    
    dispatch({ type: types.GET_BOOKS_SUCCESS, payload: data.data });
  } catch (error) {
    toast.error(error.message);
    dispatch({ type: types.GET_BOOKS_FAILURE, payload: error });
  }
};
const bookActions = {
  getBooks,
};

export default bookActions;