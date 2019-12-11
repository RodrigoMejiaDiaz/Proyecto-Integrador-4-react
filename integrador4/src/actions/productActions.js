import { FETCH_PRODUCTS } from "./types";

export const fetchProducts = () => (dispatch) => {
    fetch("http://192.168.244.129:8000/api/productos").then(res => res.json())
            .then(data => {
                return dispatch({ type:FETCH_PRODUCTS, payload: data });
            });
}