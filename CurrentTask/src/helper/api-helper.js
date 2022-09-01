const getProducts= async()=>{
    const response =await fetch('https://fakestoreapi.com/products?limit');
    const result =await response.json()
    return result
}
const getSingleProduct= async(id)=>{
    const response =await fetch(`https://fakestoreapi.com/products/${id}`);
    const result =await response.json()
    return result
}

const getDeleteProduct=async()=>{
   const response = await fetch('https://fakestoreapi.com/products/',{ method:"DELETE"})
       const result=  await response.json()
        return result
}
export {getProducts,getSingleProduct, getDeleteProduct}