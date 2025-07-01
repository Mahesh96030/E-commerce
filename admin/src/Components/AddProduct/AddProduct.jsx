import React from 'react'
import upload_area from '../../assets/upload_area.svg'
import './AddProduct.css'
import { useState } from 'react'
const AddProduct = () => {

const [image,setImage] = useState(false)
const [productDetails,setProductDeatils] = useState({
    name:'',
    image:'',
    category:'',
    new_price:'',
    old_price:''
})

const imageHandler = (e)=>{
    setImage(e.target.files[0])
}

const changeHandler = (e)=>{
    setProductDeatils({
        ...productDetails,[e.target.name]:e.target.value
    })

}
const Add_Product = async () => {
    console.log(productDetails);
    let product = productDetails;
    console.log(product);

    let formData = new FormData();
    formData.append('product', image);

    // Create a new promise for file upload
    const uploadImage = () => {
        return new Promise((resolve, reject) => {
            fetch("http://localhost:4000/upload", {
                method: 'POST',
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            })
                .then((resp) => resp.json())
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    try {
        const responseData = await uploadImage();
        console.log(responseData);

        if (responseData.success) {
            product.image = responseData.image_url;
            await fetch('http://localhost:4000/addproduct',{
                method:"POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(product)
            }).then(res => res.json()).then((data) => {
                data.success ? alert("Product Added") : alert('Failed')
            })
        }
    } catch (error) {
        console.error("Upload failed:", error);
    }
};




  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Offer Price</p>
                <input value={productDetails.new_price} onChange={changeHandler}  type="text" name='new_price' placeholder='Type here' />
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler}  name='category' className='add-product-selector' >
                <option value='women'>Women</option>
                <option value='men'>Men</option>
                <option value='kid'>Kid</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input" >
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='addproduct-thumnail-img' /></label>
                <input onChange={imageHandler} type="file"  name='image' id='file-input' hidden/>
        </div>
        <button className='addproduct-btn' onClick={()=>{Add_Product()}}>ADD </button>
    </div>
  )
}

export default AddProduct