import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface MenuComponent {
    handleRestart: () => void;
}

const MenuComponents: FC<MenuComponent> = ({handleRestart}) => {

    return (
        <div>
            <div className="app box-3">
                <Link to="/" className="btn btn-three">
                    <span>Главное меню</span>
                </Link>
                <div onClick={handleRestart} className="btn btn-three">
                    <span>Рестарт игры</span>
                </div>
                <Link to="/rules" className="btn btn-three">
                    <span>Правила</span>
                </Link>
                <Link to="/about" className="btn btn-three">
                    <span>О авторах</span>
                </Link>
            </div>
        </div>
    );
};

export default MenuComponents;