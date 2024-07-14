const getData = async ()=>{
    const res = await fetch ("https://dummyjson.com/products");
    return res.json()
}
console.log(getData())
export default getData;