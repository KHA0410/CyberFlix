import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDsGheDangDat } from '../../redux/seatSlice/seatSlice';

export default function BookingSeats({ dsGhe }) {
    console.log("dsGhe", dsGhe);

    let { dsGheDangDat } = useSelector(state => state.seatSlice);
    const dispatch = useDispatch();

    console.log("dsGheDangDat", dsGheDangDat);

    // todo: render seat list 
    let renderGhe = () => {
        return dsGhe.map((ghe, index) => {
            let cssGheDaDat = '';
            let disabled = false;
            
            // trạng thái ghế đã được đặt
            if (ghe.daDat) {
                cssGheDaDat = 'selected';
                disabled = true;
            }

            // xét trạng thái ghế đang đặt
            let cssGheDangDat = "";
            let indexGheDangDat = dsGheDangDat.findIndex(gheDangDat => {
                return gheDangDat.tenGhe === ghe.tenGhe;
            });
            
            if (indexGheDangDat !== -1) {
                cssGheDangDat = "selecting";
            }

            return (<button key={index} disabled={disabled} className={`${cssGheDaDat} ${cssGheDangDat} bg-gray-500 dsGhe__seat w-10 h-10 md:w-7 md:h-7 sm:w-5 sm:h-5 rounded-lg`} onClick={() => {
                handleSelectedSeat(ghe);
            }}></button>);
        });
    }

    // todo: handle selected seat
    let handleSelectedSeat = (gheDangChon) => {
        let dsGheDatMoi = [...dsGheDangDat];
        let indexGheDangDat = dsGheDangDat.findIndex(gheDangDat => gheDangDat.tenGhe === gheDangChon.tenGhe);

        if (indexGheDangDat !== -1) {
            dsGheDatMoi.splice(indexGheDangDat, 1);
        } else {
            dsGheDatMoi.push(gheDangChon);
        }

        dispatch(setDsGheDangDat(dsGheDatMoi));

        dsGheDangDat = dsGheDatMoi;
        return [...dsGheDangDat];
    }

    return (
        <div className='seatsSelection__content'>
            <div className='content__screen w-3/4 xl:w-11/12 lg:w-full flex justify-center'>
                <span className='py-3 text-white text-xl'>Màn hình</span>
            </div>
            <div className='content__dsGhe w-3/4 xl:w-11/12 lg:w-full'>
                {renderGhe()}
            </div>
            <div className='content__note w-3/4 xl:w-11/12 lg:w-full grid grid-cols-3'>
                <div className='note__item'>
                    <div className='w-10 h-10 md:w-7 md:h-7 sm:w-5 sm:h-5 rounded-lg empty'></div>
                    <p className='ml-3'>Ghế trống</p>
                </div>
                <div className='note__item'>
                    <div className='w-10 h-10 md:w-7 md:h-7 sm:w-5 sm:h-5 rounded-lg selecting'></div>
                    <p className='ml-3'>Đang chọn</p>
                </div>
                <div className='note__item'>
                    <div className='w-10 h-10 md:w-7 md:h-7 sm:w-5 sm:h-5 rounded-lg selected'></div>
                    <p className='ml-3'>Đã đặt</p>
                </div>
            </div>
        </div>
    )
}