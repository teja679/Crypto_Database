import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'
import Loader from '../components/Loader/Loader'
import { DateRangeSharp } from '@mui/icons-material'
import { MenuItem, Select } from '@mui/material'

const CoinPage = () => {
	const [searchParams] = useSearchParams()
	// console.log(searchParams)

	const [data, setData] = useState()
	const [prices, setPrices] = useState()

	const options = {
		plugins: {
			legend: {
				display: false
			}
		}
	}
	const [loading, setLoading] = useState(true)
	const [loadingChart, setLoadingChart] = useState(true)
	const [chartData, setChartData] = useState({
		labels: [],
		datasets: [
			{
				data: prices.map((item) => item[1]),
				borderWidth: 2,
				fill: false,
				tension: 0.25,
				backGroundColor: 'white',
				borderColor: 'white',
				pointRadius: 0,
			}
		]
	})

	useEffect(() => {
		if (searchParams) {
			const API_URL = `https://api.coingecko.com/api/v3/coins/${searchParams}`

			axios.get(API_URL).then(res => {
				if (res.data) {
					setData(res.data)
					console.log(res.data)
					setLoading(false)
				} else {
					console.log('could not get data')
				}
			})
		}
	}, [searchParams])

	useEffect(() => {
		if (data) {
			const API_URL = `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=30&interval=daily`

			axios.get(API_URL).then(res => {
				if (res.data) {
					setPrices("prices>>>>", res.data.prices)
					setLoadingChart(false)
					setChartData({
						labels: prices?.map(data => data[0]),
						datasets: [
							{
								data: prices.map((item) => item[1]),
								borderWidth: 2,
								fill: false,
								tension: 0.25,
								backGroundColor: 'white',
								borderColor: 'white',
								pointRadius: 0,
							}
						]
					})
				} else {
					console.log('could not get prices')
				}
			})
		}
	}, [data])

	return (
		<>
			{/* {loading && loadingChart ? (
				<Loader />
			) : (
				<> */}
				Hello world
					<Header />
					<div className='coin-page-div'>
						<p>Price Change in the last
							<span>
							<Select
                  value={days}
                  label="Days"
                  onChange={handleChange}
                  className="select-days"
                  sx={{
                    height: "2.5rem",
                    color: "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "var(--white)",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "var(--white)",
                    },
                  }}
                >
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={60}>60</MenuItem>
                  <MenuItem value={90}>90</MenuItem>
                </Select>
							</span>
						</p>
					</div>
					
				{/* </>
			)} */}
		</>
	)
}

export default CoinPage