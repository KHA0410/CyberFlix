import React, { useEffect, useState } from 'react'
import { https } from '../../services/api'
import { Card, Tooltip } from 'antd';
import Meta from 'antd/es/card/Meta';
import { NavLink } from 'react-router-dom';

export default function ListMovie() {
    const [movieArr, setMovieArr] = useState([])
    //Lấy ds phim
    useEffect(() => {
        https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
        .then((res) => {
         console.log(res.data.content);
         setMovieArr(res.data.content)
        })
        .catch((err) => {
         console.log(err);
         });
    }, [])
  return (
    <div className='grid grid-cols-4 gap-5 pt-5 containerCss'>
        {movieArr.map((item) => {
            return(
                //Dùng card antd
                <Card
                hoverable
                style={{
                  width: "100%",
                }}
                cover={<img className='h-60 object-cover' alt="example" src={item.hinhAnh} />}
              >
                <Tooltip title={item.tenPhim}>
                <Meta title={item.tenPhim} />
                </Tooltip>
                <NavLink to={`/detail/${item.maPhim}`} className="bg-blue-500 block font-bold text-center text-white rounded py-2 mt-5">Xem chi tiết</NavLink>
              </Card>
            )
        })}
    </div>
  )
}
