import axios from "axios";
import * as actionTypes from "../types";

const newsApi = "https://newsapi.org/v2/everything?q=";
const apiKey = `627d9896969248899c9798f3e0ab6905`;

export const getNews = query => (dispatch, state) => {
    axios
        .get(`${newsApi}${query}&apiKey=${apiKey}`)
        .then(res => {
            dispatch({
                type: actionTypes.GET_NEWS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
};