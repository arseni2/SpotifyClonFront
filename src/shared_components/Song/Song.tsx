'use client'

import React from 'react';
import {EllipsisOutlined, HeartOutlined} from "@ant-design/icons";

const Song = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '30px'}}>
                <div style={{gap: '30px', display: 'flex',}}>
                    <img width={80} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt={'image'}/>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div>Ant Design (default)</div>
                        <p>Ant Design (secondary)</p>
                    </div>
                </div>
                <div style={{gap: '30px', display: 'flex'}}>
                    <HeartOutlined style={{ fontSize: '120%'}}/>
                    <p>5:05</p>
                    <EllipsisOutlined style={{ fontSize: '140%'}}/>
                </div>
            </div>
        </>
    );
};

export default Song;