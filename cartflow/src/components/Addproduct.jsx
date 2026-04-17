import React, { useState } from 'react'
import '../styles/addproduct.css'

export default function Addproduct() {

    const schema = {
        name: '',
        price: '',
        image: '',
        rating: '',
        description: '',
        category: ''
    }

    const [data, setData] = useState(schema)



    function handleChange(e) {
        let inpName = e.target.name
        let inpValue = e.target.value

        setData({ ...data, [inpName]: inpValue })

    }

    async function handleSubmit(e) {
        e.preventDefault()

        let res = await fetch(`http://localhost:3000/${data.category}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    

        setData({
            name: "",
            price: "",
            description: "",
            image: "",
            rating: "",
            category: ""
        })

    }
    return (
        <div className="form-container">
            <h1>Add Product Form</h1>
            <hr /><br />
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Product Name : </label>
                <input type="text" name="name" id="" placeholder='Enter Product Name' onChange={handleChange} value={data.name} />
                <label htmlFor="">Product Price : </label>
                <input type="number" name="price" id="" placeholder='Enter Product Price' onChange={handleChange} value={data.price} />
                <label htmlFor="">Product Image URL : </label>
                <input type="url" name="image" id="" placeholder='Enter Product Image' onChange={handleChange} value={data.image} />
                <label htmlFor="">Product Description : </label>
                <input type="text" name="description" id="" placeholder='Enter Product description' onChange={handleChange} value={data.description} />
                <label htmlFor="">Product Rating : </label>
                <input type="number" name="rating" id="" placeholder='Enter Product Rating' onChange={handleChange} value={data.rating} />
                <label htmlFor="">Product Category : </label>
                <select name="category" id="" onChange={handleChange} value={data.category}>
                    <option value="">---Select Category---</option>
                    <option value="mens">Mens</option>
                    <option value="womens">Womens</option>
                    <option value="kids">Kids</option>
                    <option value="electronics">Electronics</option>
                </select>

                <button type='submit'>Add Product</button>
            </form>

        </div>
    )
}
