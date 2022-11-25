import React from 'react';
import {useEffect,useState} from 'react';


const AllBuyers = () => {
  const[buyer, setBuyer] = useState([]);
  const [loading, setLoading] = useState(true);

console.log("buyer",buyer);
setLoading(true)

    useEffect(()=>{
   fetch('http://localhost:5000/users')
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
    setBuyer(setBuyer)
    setLoading(false)
   })

    },[])
    return (
        <div className='' >
      {
        loading ? <p>Loading...</p> : 

        <h1>all buyer is heeree</h1>
      }
        </div>
    );
};

export default AllBuyers;