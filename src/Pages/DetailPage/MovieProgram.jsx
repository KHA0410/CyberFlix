import { Tabs } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { https } from '../../services/api';

export default function MovieProgram() {
    const [dsLichChieu, setDsLichChieu] = useState({});

    let { maPhim } = useParams();

    useEffect(() => {
        https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`).then((res) => {
            console.log("ket qua lich chieu phim", res.data.content);
            setDsLichChieu(res.data.content); 
        }).catch((err) => {
            console.log("err", err);
        });
    }, []);

    const items = [
        {
            key: '1',
            label: 'Tab 1',
            children: 'Content of Tab Pane 1',
        }
    ];

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className='detailPage__movieProgram containerCss'>
            {/* Using ternary operator to check if having movie schedule */}
            {dsLichChieu.heThongRapChieu.length === 0 ? (
                <div>Khong co lich chieu</div>
            ) : (
                <div>Co lich chieu</div>
            )}
        </div>
    )
}
