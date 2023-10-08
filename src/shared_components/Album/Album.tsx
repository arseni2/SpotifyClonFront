import React from 'react';


const Album = () => {
    return (
        <div
            style={{
                width: 220,
                paddingTop: 20,
                cursor: 'pointer',
                borderRadius: '8px',
                border: '1px solid #f0f0f0',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                paddingBottom: '20px'
            }}
        >
            <div style={{display: 'flex', flexDirection: 'column', gap: '13px'}}>
                <img
                    style={{width: '180px', height: '180px', objectFit: 'cover', borderRadius: '10px'}}
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                <div style={{fontWeight: 600}}>Лон</div>
                <p style={{width: 'fit-content'}}>schokk 2022</p>
            </div>
        </div>
    );
};

export default Album;