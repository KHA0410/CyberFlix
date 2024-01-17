import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { https } from '../../services/api'
import { Button, Rate } from 'antd'

export default function DettailPage() {
  //Lấy mã phim từ URL
  let { maPhim } = useParams()

  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((res) => {
        console.log("Detail",res.data.content);
        setIsLoading(false);
        setDetail(res.data.content);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

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
          <p><b>Rate:</b> <Rate value={detail.danhGia} /></p>
          <video controls width={500} height={300} >
            <source src={detail.trailer} type='video/mp4'/>
          </video>
          
          <div className='flex py-5 space-x-5'>
            {/* Button trailer */}
          <div>
            <Button className='text-blue-500 border-blue-500'>Xem trailer</Button>
          </div>
          {/* Button mua */}
          <div>
          <Button type='primary' className='bg-blue-500 text-white rounded  form-medium '>Muavé</Button>
          </div>
          </div>

        <div>
         
            
          

        </div>
        </div>
      </div>
    </div>

  )
}
