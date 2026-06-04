import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function Products() {

  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
    fetch("http://localhost:3000/products")
    .then((response)=> response.json())
    .then((data)=>setProducts(data))
    .catch((error)=>console.log(error))
  },[])

  return (
    <div>
      {products.length > 0 ? (
        <div className='product-container'>
            {products.map((product)=>{
              return(
                <div key={product.id}  className='pro-container'>
                  <div className='product-card' onClick={()=> {navigate('/product/'+product.id)}}>
                    <img className='image' src={product.image.image} alt={product.name} />
                    <b className='p-name'>{product.name}</b>
                    <p>{product.ram}</p>
                    <p>{product.Sound_Quality}</p>
                    <p>{product.Best_For}</p>
                    <b  className='p-price'>{product.price}</b>
                  </div>
                </div> 
              ) 
            })}
         </div>
      ):(
        <div>
          products loading
        </div>
      )}
    </div>
  )
}



// npx json-server --watch data/products.json --port 3000 --static ./data

export default Products