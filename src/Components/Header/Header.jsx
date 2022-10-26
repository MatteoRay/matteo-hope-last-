import React from 'react';
import Button2 from "../Button2/Button2";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button2 onClick={onClose}>Закрыть</Button2>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
