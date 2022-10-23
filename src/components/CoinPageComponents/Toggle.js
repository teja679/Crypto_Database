import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButton'

export const ColorToggleButton = ({
    tpe, setType, days, chartData, setChartData, id, id2
}) => {
  return (
    <div>
        <ToggleButtonGroup>
            <ToggleButton>
                Price
            </ToggleButton>
            
            <ToggleButton>
                MKT Cap
            </ToggleButton>
            
            <ToggleButton>
                Volume
            </ToggleButton>
        </ToggleButtonGroup>
    </div>
  )
}
