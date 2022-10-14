import React from 'react'
import './listStyles.css'
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

const List = ({ coin }) => {
	return (
		<tr className='list-wrapper'>
			<td className='image-td'>

				<img src={coin.image} className='list-logo' alt='coinImage' />
			</td>
			<td className='coin-info'>
				<p className='symbol td-text'>{coin.symbol}-USD</p>
				<p className='name td-text'>{coin.name}</p>
			</td>


			{coin.price_change_percentage_24h > 0 ? (
				<td className="chip-flex td-chip-flex">
					<div className="chip td-text td-chip"
						style={{
							color: "var(--green)",
							borderColor: "var(--green)",
						}}
					>
						{"+" + coin.price_change_percentage_24h.toFixed(2) + " %"}
					</div>
					<TrendingUpRoundedIcon
						className="trending-icon td-icon"
						fontSize="2.5rem"
					/>
				</td>
			) : (
				<td className="chip-flex td-chip-flex">
					<div className="chip red td-text td-chip">
						{coin.price_change_percentage_24h.toFixed(2) + " %"}
					</div>
					<TrendingDownRoundedIcon
						className="trending-icon red td-icon"
						fontSize="2.5rem"
					/>
				</td>
			)}
			{coin.price_change_percentage_24h > 0 ? (
				<td className="price td-text">${coin.current_price.toLocaleString()}</td>
			) : (
				<td className="price price-red td-text">
					${coin.current_price.toLocaleString()}
				</td>
			)}
			<td className='name2 td-text td-volume'>
				${coin.total_volume.toLocaleString()}
			</td>
			{/* <td className='name2 td-text td-volume-mobile'>${volume}</td> */}
			<td className="name2 td-text td-cap">
				${coin.market_cap.toLocaleString()}
			</td>
		</tr>
	)
}

export default List