import React from 'react'
import { Box } from '@mui/system'
import style from "./Card.module.css"
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import { useRouter } from 'next/router'

const Card = ({title,image,explain,smoking,price,seat,id}) => {
    const router = useRouter()
    const clickHandler = () => {
        router.push(`/restaurants/${id}`)
    }

    const longTitle = title.length > 14

    if (title.length > 17) {
        title = title.slice(0,17) + ".."
    }

  return (
    <Box className={style.card}>
    <div className={style.cardImg}>
        <img src={image}/>
    </div>
    <h1 className={`card_title ${longTitle ? "long_title":""}`}>{title}</h1>
    <hr className={style.border}/>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
        <CurrencyYenIcon className={style.icon} fontSize="small"/>
        <p className={style.info}>{price}</p>
        <ChairOutlinedIcon className={style.icon}  fontSize="small"/>
        <p className={style.info}>{seat}</p>
        <SmokingRoomsIcon className={style.icon}  fontSize="small"/>
        <p className={style.info}>{smoking}</p>
    </Box>
    <p className={style.explain}>{explain}</p>
    <button className={style.button} onClick={clickHandler}>詳細を見る</button>
    
    </Box>
  )
}

export default Card