import React, { useEffect, useState } from 'react'
import { https } from '../../../services/api';
import { Tabs, Tooltip } from 'antd';
import MovieSchedule from './MovieSchedule';

export default function TheatersTab() {

    const [dsHeThongRap, setDsHeThongRap] = useState([]);

    useEffect(() => {
        https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09").then((res) => {
            console.log("res", res.data.content);
            setDsHeThongRap(res.data.content);
        }).catch((err) => {
            console.log("err", err);
        });
    }, []);

    const onChange = (key) => {
        console.log(key);
    };

    const items = dsHeThongRap.map((heThongRap) => {
        return {
            key: heThongRap.maHeThongRap,
            label: <img src={heThongRap.logo} className='w-14' />,
            children: <Tabs className='theatersTab__child' style={{height: 720}} tabPosition='left' items={heThongRap.lstCumRap.map((cumRap) => {
                return {
                    key: cumRap.tenCumRap,
                    label: <div className='tabChild__address text-left w-72 truncate'>
                        <h2 className='address__title uppercase'>{cumRap.tenCumRap}</h2>
                        <Tooltip title={cumRap.diaChi}>
                            <p className='address__text'>{cumRap.diaChi}</p>
                        </Tooltip>
                    </div>,
                    children: <MovieSchedule dsPhim={cumRap.danhSachPhim} />
                }
            })} />
        }
    });

    return (
        <div className='theaters containerCss md:hidden' id='cumRap'>
            <Tabs className='theatersTab' style={{height: 720}} tabPosition='left' defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
    )
}
