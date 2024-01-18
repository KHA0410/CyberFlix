import { CheckCircleTwoTone } from '@ant-design/icons';
import { message } from 'antd';
import confirm from 'antd/es/modal/confirm';
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function BookingPayment({ ttPhim }) {
    let { dsGheDangDat } = useSelector(state => state.seatSlice);
    // console.log(dsGheDangDat);
    // console.log(ttPhim);
    let { user } = useSelector(state => state.userSlice);
    let navigate = useNavigate();
    

    // show confirm when payment 
    let showConfirm = () => {
        confirm({
            title: 'Đặt vé thành công !',
            icon: <CheckCircleTwoTone twoToneColor="#52c41a" style={{fontSize: "60px"}} />,
            onOk() {
                console.log("OK");
            },
        })
    }

    let renderThongTinVe = (dsGheDangDat) => {
        let total = 0;
        let arrVe = [];
        dsGheDangDat.map((ghe) => {
            arrVe.push(`ghế ${ghe.tenGhe}, `);
            total += ghe.giaVe;
        });
        return { total, arrVe };
    }

    let handleBuyTicket = (arrVe) => {
        if (user) {
            if (arrVe.length > 0) {
                // show confirm 
                showConfirm();
            } else {
                message.warning("Vui lòng chọn ghế !");
            }
        } else {
            localStorage.setItem("BOOKING", '/booking')
            navigate("/login")
            message.error("Vui lòng đăng nhập để đặt vé!")
        }
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
                <button className='uppercase w-full font-medium rounded-md text-3xl pt-3 pb-3 text-white bg-blue-500'
                onClick={() => {
                    handleBuyTicket(renderThongTinVe(dsGheDangDat).arrVe);
                }}
                >đặt vé</button>
            </div>           
        </>
    )
}
