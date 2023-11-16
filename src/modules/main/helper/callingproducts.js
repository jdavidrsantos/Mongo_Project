import axios from "axios";

const BASE_URL = 'https://fakestoreapi.com/products/';

const getTodoItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    const todoItems = response.data;
    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
};


export default getTodoItems

