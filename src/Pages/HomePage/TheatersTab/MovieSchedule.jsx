import React from 'react'

export default function MovieSchedule({ dsPhim }) {
    console.log("dsPhim", dsPhim);

    // todo: Render dsPhim
    const renderDsPhim = () => {
        return dsPhim.map((phim, index) => {
            return (
                <div className='movieSchedule__item flex space-x-5 items-center' key={index}>
                    <img src={phim.hinhAnh} alt='movie' className='item__img' />
                    <h2>{phim.tenPhim}</h2>
                    <div>
                        moment
                    </div>
                </div>
            )
        });
    }

    return (
        <div className='movieSchedule space-y-5 overflow-y-scroll' style={{height: 600}}>
            {renderDsPhim()}
        </div>
    )
}
