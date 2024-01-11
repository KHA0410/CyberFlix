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
    <div className='my-5'>
      <div className='containerCss'>
        <h1 className='text-3xl py-2 font-medium'>Nội Dung Phim</h1>
      <hr className='bold-hr'/>
      </div>
      
      <div className='containerCss pt-5 flex space-x-5'>
        <img className='h-60 object-cover' src={detail.hinhAnh} alt="" />
        <div>
            <h1 className='text-3xl mb-5 form-medium'>{detail.tenPhim}</h1>
            <p><b>Mã Phim:</b> {detail.maPhim}</p>
            <p><b>Mô tả:</b> {detail.moTa}</p>   
            <p><b>Thời gian chiếu:</b> {detail.ngayKhoiChieu}</p> 
            <p><b>Trailer:</b> {detail.trailer}</p>
            <button className='bg-blue-500 text-white rounded px-5 py-1 mt-5 form-medium'>Mua vé</button>
        </div>
    </div>
    </div>
    
  )
}
