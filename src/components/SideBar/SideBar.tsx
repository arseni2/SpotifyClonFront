"use client"

import React, {useCallback} from 'react';
import {UserOutlined} from "@ant-design/icons";
import {usePathname, useRouter} from "next/navigation";
import style from './SideBar.module.scss'

const SideBar = ({children}) => {
    const pagesInSider = [
        {
            label: 'Главная',
            icon: <UserOutlined />,
            key: '/',
        },
        {
            label: 'Поиск',
            icon: <UserOutlined />,
            key: '/search',
        },
        {
            label: 'Моя медиатека',
            icon: <UserOutlined />,
            key: '/favorite',
        },
        {
            label: 'Подбор песней',
            icon: <UserOutlined />,
            key: '/songs',
        },
        {
            label: 'Хиты',
            icon: <UserOutlined />,
            key: '/hits',
        },
        {
            label: 'Загрузить трек, альбом',
            icon: <UserOutlined />,
            key: '/upload',
        }
    ]
    const router = useRouter()
    const pathname = usePathname()
    let handleClick = useCallback((path: string) => {
        router.push(path)
    }, [pathname])
    return (
        <div className={style.container}>
            <div className={style.container_nav}>
                {pagesInSider.map((item) => {
                    return (<div onClick={() => handleClick(item.key)} className={pathname === item.key ? style.menu_item_active : style.menu_item}>
                        <div>{item.icon}</div>
                        <div>{item.label}</div>
                    </div>)
                })}
            </div>
            <div>
                    <div>{children}</div>
            </div>
        </div>
    );
};

export default SideBar;