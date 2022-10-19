import axios from 'axios'
import React from 'react'
import { COIN_GECKO_URL } from '../Contants'

export const getCoinData = async (id, slice) => {
    console.log('hii')

    const API_URL = COIN_GECKO_URL + `${id}`
    console.log('api url', API_URL)
    var response_data;
    if(slice){
        response_data = await axios.get(API_URL.slice(0, -1), {crossDomain: true})
    } else{
        response_data = await axios.get(API_URL, {crossDomain: true})
    }
    console.log('response_data', response_data)
    if(!response_data){
        console.log('No data')
        return;
    }
    return response_data.data;
}
