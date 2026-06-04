import React, { useEffect, useState } from 'react'
import { href, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Viewproducts() {

    const [viewproduct, setViewproduct] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    const [buy, setBuy] = useState([])

    const handleChange = (e)=>{
      setBuy({...buy,[e.target.name]:e.target.value})
    }

  const handleBuy = async ()=>{
    const res = await fetch(`http://localhost:3000/users?Name:${buy.Name}`)
    const users = await res.json()
    console.log(`${buy.Name} is purchased for`, viewproduct.name)

    if(users.length > 0){
      alert ('Product Purchased Successfully')
      navigate('/')
    }
    else{
      alert('User Not Registered')
      navigate('/login')

    }
  }

    useEffect(()=>{
      fetch("http://localhost:3000/products/"+id)
      .then((response)=>response.json())
      .then((data)=> setViewproduct(data))
      .catch((err)=>console.log(err))
    },[])

    const specs = [
      {icon: "bi-cpu", key:"Processor"},
      {icon: "bi-sd-card", key:"ram"},
      {icon: "bi-camera", key:"Cameras"},
      {icon: "bi-phone", key:"Display"},
      {icon: "bi-display", key:"display"},
      {icon: "bi-battery-full", key:"Battery"},
      {icon: "", key:"Cushioning"},
      {icon: "", key:"Upper"},
      {icon: "", key:"seller"},
      {icon: "bi-battery-charging", key:"Fast_Charging"},
      {icon: "bi-mic-mute", key:"Noise_Cancellation"},
      {icon: "bi-broadcast", key:"Connectivity"}
    ]

  return (
    <div className='view vh-100vh'>
      {viewproduct && <div className='view-image card'>
        <img src={viewproduct.image.image} alt={viewproduct.name} />
      </div> }
      {viewproduct && <div className='bi'>
        <h3>Product Name : {viewproduct.name}</h3>
        <h3 className='price'>Product Price : {viewproduct.price}</h3> <br />
        <b className='product-high'>Products Details:</b>
                 {specs
                .filter(s=>viewproduct[s.key])
                 .map(s=>(
                   <div key={s.key}>
                     <i className={`bi ${s.icon}`}></i>{""}
                    {viewproduct[s.key]}
                  </div>
                  ))}
            <div className='buy-now'>
              <a className='buy btn btn-primary' onClick={handleBuy}>Buy Now At {viewproduct.price}</a>
            </div>
      </div> 
      }
    </div>
  )
}


export default Viewproducts