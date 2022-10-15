import React, { useEffect, useState } from 'react'
import { useSearchParams  } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'
import Loader from '../components/Loader/Loader'
const CoinPage = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams)

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     if (searchParams) {
//         const API_URL = `https://api.coingecko.com/api/v3/coins/${searchParams}`
    
//         axios.get(API_URL).then(res => {
//       if(res.data){
//             setData(res.data) 
//             console.log(res.data)
//             setLoading(false)
//         }else{
//             console.log('could not get data')
//         } 
//     })
//     }
//   }, [searchParams])

    
    return (
        <>
           {loading ? (
            <Loader />
           ): (
            <>
                <Header />

            </>
           )}
        </>
    )
}

export default CoinPage