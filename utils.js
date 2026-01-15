import axios from "axios";
const baseURL="http://localhost:8000/books/"

export const getCategories = async()=>{
    const response = await axios.get(baseURL+"categories")
    return response
}

export const getBooksByCateg = async({queryKey})=>{
    console.log(queryKey[1]);
    const response = await axios.get(baseURL+"categ/"+queryKey[1])
    return response
}
    
export const getBooksBySearchedText = async({queryKey})=>{
    console.log(queryKey[1]);
    const response = await axios.get(baseURL+"title/"+queryKey[1])
    return response
}

export const getBooks = async()=>{
    const response = await axios.get(baseURL+"books")
    return response
}