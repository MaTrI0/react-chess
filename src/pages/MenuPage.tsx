import React from 'react';
import {Link} from "react-router-dom";

const MenuPage = () => {
    return (
        <div className="app box-2">
            <Link to="/main" className="btn btn-two">
                <span>Начать игру</span>
            </Link>
            <Link to="/settings" className="btn btn-two">
                <span>Настройки</span>
            </Link>
            <Link to="/rules" className="btn btn-two">
                <span>Правила</span>
            </Link>
            <Link to="/about" className="btn btn-two">
                <span>О авторах</span>
            </Link>
        </div>
    );
};

export default MenuPage;