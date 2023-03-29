import { FC } from "react"
import { Box,IconButton } from "@mui/material"
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material"
import Typography from "@mui/material/Typography"

interface Props {

}

const ItemCounter:FC<Props> = () => {
  return (
    <Box display="flex" alignItems="center">
        <IconButton>
          <RemoveCircleOutline/>
        </IconButton>
        <Typography xs={{ width:40, textAlign:"center"}}>1</Typography>
        <IconButton>
          <AddCircleOutline/>
        </IconButton>

    </Box>
  )
}

export default ItemCounter