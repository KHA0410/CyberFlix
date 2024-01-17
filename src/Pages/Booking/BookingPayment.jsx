import React from 'react'
import { useSelector } from 'react-redux'

export default function BookingPayment({ ttPhim }) {
    let { dsGheDangDat } = useSelector(state => state.seatSlice);
    console.log(dsGheDangDat);
    console.log(ttPhim);

    let renderThongTinVe = (dsGheDangDat) => {
        let total = 0;
        let arrVe = [];
        dsGheDangDat.map((ghe) => {
            arrVe.push(`ghế ${ghe.tenGhe}, `);
            total += ghe.giaVe;
        });

        return { total, arrVe };
    }

    return (
        <>
            <div className='payment__item'>
                <h2 className='text-2xl text-blue-600 capitalize font-normal'>Thông tin chọn ghế</h2>
            </div>
            <div className='payment__item'>
                <p className='item__title'>Cụm Rạp: </p>
                <p className='item__value'>{ttPhim.tenCumRap}</p>
            </div>
            <div className='payment__item'>
                <p className='item__title'>Địa chỉ: </p>
                <p className='item__value'>{ttPhim.diaChi}</p>
            </div>
            <div className='payment__item'>
                <p className='item__title'>Rạp: </p>
                <p className='item__value'>{ttPhim.tenRap}</p>
            </div>
            <div className='payment__item'>
                <p className='item__title'>Ngày giờ chiếu: </p>
                <p className='item__value'>{ttPhim.ngayChieu} - {ttPhim.gioChieu}</p>
            </div>
            <div className='payment__item'>
                <p className='item__title'>Tên phim: </p>
                <p className='item__value'>{ttPhim.tenPhim}</p>
            </div>
            <div className='payment__item'>
                <p className='item__title'>Chọn: </p>
                <p className='item__value'>{renderThongTinVe(dsGheDangDat).arrVe}</p>
            </div>
            <div className='payment__item'>
                <p className='item__title'>Tổng tiền: </p>
                <p className='item__value text-xl'>{(renderThongTinVe(dsGheDangDat).total).toLocaleString()} VND</p>
            </div>
            <div className='payment__item'>
                <button className='uppercase w-full font-medium rounded-md text-3xl pt-3 pb-3 text-white bg-blue-500'>đặt vé</button>
            </div>
        </>
    )
}
