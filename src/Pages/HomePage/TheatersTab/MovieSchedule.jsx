import React from 'react'
import moment from 'moment'

export default function MovieSchedule({ dsPhim }) {
    console.log("dsPhim", dsPhim);

    // todo: Render dsPhim
    const renderDsPhim = () => {
        return dsPhim.map((phim, index) => {
            return (
                <>
                    <div className='movieSchedule__item flex space-x-5 items-center ml-6' key={index}>
                        <img src={phim.hinhAnh} alt='movie' className='item__img' />
                        <div className='item__content'>
                            <h2 className='item__movieName'>{phim.tenPhim}</h2>
                            <div className='item__schedule grid grid-cols-3 2xl:grid-cols-2 lg:grid-cols-1 gap-4'>
                                {phim.lstLichChieuTheoPhim.map((date, index) => {
                                    return (
                                        <a className='schedule__date' key={index}>
                                            <p>{moment(date).format("DD/MM/YYYY")}</p>
                                            <span>~</span>
                                            <p>{moment(date).format("hh:mm")}</p>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <hr />
                </>
            )
        });
    }

    return (
        <div className='movieSchedule space-y-5 overflow-y-scroll' style={{height: 600}}>
            {renderDsPhim()}
        </div>
    )
}
