import React, { useEffect, useState } from 'react'
import BookingPayment from './BookingPayment'
import { useParams } from 'react-router-dom'
import { https } from '../../services/api';
import BookingSeats from './BookingSeats';

export default function Booking() {
    let { maLichChieu } = useParams();
    const [dsGhe, setDsGhe] = useState([]);
    const [thongTinPhim, setThongTinPhim] = useState({});

    useEffect(() => {
        https.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`).then((res) => {
            console.log("lich chieu", res.data.content);
            setThongTinPhim(res.data.content.thongTinPhim);
            setDsGhe(res.data.content.danhSachGhe);
        }).catch((err) => {
            console.log("err", err);
        });
    }, []);

    return (
        <div className='booking containerCss'>
            <h1 className='booking__title text-center capitalize text-4xl font-normal mb-5'>Vui lòng chọn ghế</h1>
            <hr />
            <div className='booking__content mt-8'>
                <div className='booking__seatsSelection'>
                    <BookingSeats dsGhe={dsGhe} />
                </div>
                <div className='booking__payment rounded-md w-3/5 lg:w-4/5 md:w-11/12 sm:w-full'>
                    <BookingPayment ttPhim={thongTinPhim} />
                </div>
            </div>
        </div>
    )
}
