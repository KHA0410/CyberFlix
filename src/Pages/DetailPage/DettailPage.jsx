import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { https } from '../../services/api'

export default function DettailPage() {
    //Lấy mã phim từ URL
    let {maPhim} = useParams()
    
    const [detail, setDetail] = useState({})
    
    useEffect(() => {
        https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
        .then((res) => {
         console.log(res.data.content);
         setDetail(res.data.content)
        })
        .catch((err) => {
         console.log(err);
         });
    },[])
  return (
    <div className='containerCss pt-5 flex'>
        <img style={{width: "400px"}} src={detail.hinhAnh} alt="" />
        <h1 style={{fontSize: "100px"}}>{detail.tenPhim}</h1>
    </div>
  )
}
