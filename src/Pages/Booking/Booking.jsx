import React from 'react'
import BookingPayment from './BookingPayment'

export default function Booking() {
  return (
    <div className='booking containerCss'>
        <h1 className='booking__title text-center capitalize text-4xl font-normal mb-5'>Vui lòng chọn ghế</h1>
        <hr />
        <div className='booking__content mt-8'>
            <div className='booking__seatsSelection'></div>
            <div className='booking__payment rounded-md w-3/5'>
                <BookingPayment />
            </div>
        </div>
    </div>
  )
}
