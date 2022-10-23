import React from 'react'
import './styles.css'
import List from '../DashboardComponents/List/index'

const CoinPageList = ({ coin, delay }) => {
  return (
    <div className='list-page-div'>
        <List coin={coin} delay={delay} />
    </div>
  )
}

export default CoinPageList