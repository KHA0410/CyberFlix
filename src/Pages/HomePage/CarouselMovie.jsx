import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import { https } from '../../services/api';

export default function CarouselMovie() {
      const [banner, setBanner] = useState([])
    useEffect(() => {
        https.get("/api/QuanLyPhim/LayDanhSachBanner")
        .then((res) => {
            console.log("banner", res.data.content);
            setBanner(res.data.content)
        })
        .catch((err) => {
         console.log(err);
         });
    },[])  
  return (
    <div className='pb-10'>
      <Carousel autoplay>
      {banner.map((item) => {
        return(
          <div>
            <img style={{width: "100%", height: "80vh", objectFit: "cover"}} src={item.hinhAnh} alt="" />
          </div>
        )
      })}
      </Carousel>
     
    </div>
  )
}

