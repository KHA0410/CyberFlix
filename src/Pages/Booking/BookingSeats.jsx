import React from 'react'

export default function BookingSeats({ dsGhe }) {
    console.log("dsGhe", dsGhe);

    return (
        <div className='seatsSelection__content'>
            <div className='content__screen w-3/4 flex justify-center'>
                <span className='py-3 text-white text-xl'>Màn hình</span>
            </div>
            <div className='content__dsGhe w-3/4'>
                {dsGhe.map((ghe, index) => {
                    return <div key={index} className='dsGhe__seat w-10 h-10 rounded-lg'></div>
                })}
            </div>
            <div className='content__note w-3/4 grid grid-cols-3'>
                <div className='note__item'>
                    <div className='dsGhe__seat w-10 h-10 rounded-lg empty'></div>
                    <p className='ml-3'>Ghế trống</p>
                </div>
                <div className='note__item'>
                    <div className='dsGhe__seat w-10 h-10 rounded-lg selecting'></div>
                    <p className='ml-3'>Đang chọn</p>
                </div>
                <div className='note__item'>
                    <div className='dsGhe__seat w-10 h-10 rounded-lg selected'></div>
                    <p className='ml-3'>Đã đặt</p>
                </div>
            </div>
        </div>
    )
}
