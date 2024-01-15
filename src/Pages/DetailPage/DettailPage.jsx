import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { https } from '../../services/api'
import { Rate } from 'antd'

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
    <div className='py-5'>
      <div className='containerCss'>
        <h1 className='text-3xl font-medium'>Nội Dung Phim</h1>
      <hr className='bold-hr'/>
      </div>
      
      <div className='containerCss pt-5 flex space-x-5'>
        <img className='h-80 rounded shadow-lg shadow-black' src={detail.hinhAnh} alt="" />

        <div className='space-y-1'>
            <h1 className='text-3xl mb-5 form-medium'>{detail.tenPhim}</h1>
            <p><b>Mã Phim:</b> {detail.maPhim}</p>
            <p><b>Mô tả:</b> {detail.moTa}</p>   
            <p><b>Thời gian chiếu:</b> {detail.ngayKhoiChieu}</p> 
            <p><b>Trailer:</b> {detail.trailer}</p>
            <p><b>Rate:</b> <Rate value={detail.danhGia}/></p>
            <div>
             <button className='bg-blue-500 text-white rounded px-5 py-1 form-medium mt-5'>Mua vé</button> 
            </div>
            
        </div>
    </div>
    </div>
    
  )
}
