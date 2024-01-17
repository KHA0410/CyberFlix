import React from 'react'

export default function BookingPayment() {
  return (
    <>
        <div className='payment__item'>
            <h2 className='text-2xl text-blue-600 capitalize font-normal'>Sự lựa chọn của bạn</h2>
        </div>
        <div className='payment__item'>
            <p className='item__title'>Cụm Rạp: </p>
            <p className='item__value'>123</p>
        </div>
        <div className='payment__item'>
            <p className='item__title'>Địa chỉ: </p>
            <p className='item__value'>123</p>
        </div>
        <div className='payment__item'>
            <p className='item__title'>Rạp: </p>
            <p className='item__value'>123</p>
        </div>
        <div className='payment__item'>
            <p className='item__title'>Ngày giờ chiếu: </p>
            <p className='item__value'>123</p>
        </div>
        <div className='payment__item'>
            <p className='item__title'>Tên phim: </p>
            <p className='item__value'>123</p>
        </div>
        <div className='payment__item'>
            <p className='item__title'>Chọn: </p>
            <p className='item__value'>123</p>
        </div>
        <div className='payment__item'>
            <p className='item__title'>Tổng tiền: </p>
            <p className='item__value'>123</p>
        </div>
        <div className='payment__item'>
            <button className='uppercase w-full font-medium rounded-md text-3xl pt-3 pb-3 text-white bg-blue-500'>đặt vé</button>
        </div>
    </>
  )
}
