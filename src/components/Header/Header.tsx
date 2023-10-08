'use client'

import React from 'react';
import style from './Header.module.scss'

import {UserOutlined} from "@ant-design/icons";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";

const Header = () => {
    return (
        <div className={style.header_container}>
            <div>
                <h1>
                    Spotify
                </h1>
            </div>

            <Dropdown>
                <DropdownTrigger>
                    <div className={style.header_avatar}>
                        Ars
                    </div>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem>
                        <button>
                            Выйти
                        </button>
                    </DropdownItem>
                    <DropdownItem>
                        <button>
                            Профиль <UserOutlined />
                        </button>
                    </DropdownItem>
                    <DropdownItem>
                        <button>
                            Загрузить трек <UserOutlined />
                        </button>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default Header;