import { useState } from 'react';
import './Filter.css';
import classNames from 'classnames';

function Filter() {
    const [isAuthorOpen, setIsAuthorOpen] = useState(false);
    const [isYearOpen, setIsYearOpen] = useState(false);
    const [isGenreOpen, setIsGenreOpen] = useState(false);

    function handleAuthor() {
        if(isAuthorOpen) {
            setIsAuthorOpen(false);
        } else {
            setIsAuthorOpen(true);
            setIsYearOpen(false);
            setIsGenreOpen(false);
        }
    }

    function handleYear() {
        if(isYearOpen) {
            setIsYearOpen(false);
        } else {
            setIsAuthorOpen(false);
            setIsYearOpen(true);
            setIsGenreOpen(false);
        }
    }

    function handleGenre() {
        if(isGenreOpen) {
            setIsGenreOpen(false);
        } else {
            setIsAuthorOpen(false);
            setIsYearOpen(false);
            setIsGenreOpen(true);
        }
    }

    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <div className={`filter__button button-author _btn-text ${isAuthorOpen && "filter__button_active"} `} onClick={handleAuthor}>
                исполнителю
            </div>
            {isAuthorOpen && <ul className="popup-menu popup-menu_author">
                <li className="popup-menu__active">Nero</li>
                <li className="popup-menu__active">Dynoro, Outwork, Mr. Gee</li> 
                <li className="popup-menu__active">Nero</li>
                <li className="popup-menu__active">Dynoro, Outwork, Mr. Gee</li>
                <li className="popup-menu__active">Nero</li>
                <li className="popup-menu__active">Dynoro, Outwork, Mr. Gee</li>
                <li className="popup-menu__active">Nero</li>
                <li className="popup-menu__active">Dynoro, Outwork, Mr. Gee</li>
                </ul>}
            <div className={classNames("filter__button button-year _btn-text", {
                "filter__button_active": isYearOpen,
                })} onClick={handleYear} >
                году выпуска
            </div>
            {isYearOpen && <ul className="popup-menu popup-menu_year">
                <li className="popup-menu__active">1995</li>
                <li className="popup-menu__active">2002</li>
                <li className="popup-menu__active">1993</li>
                <li className="popup-menu__active">2000</li>
                </ul>}
            <div className={classNames("filter__button button-genre _btn-text", {
                "filter__button_active": isGenreOpen,
                })} onClick={handleGenre}>жанру</div>
            {isGenreOpen && <ul className="popup-menu popup-menu_genre">
                <li className="popup-menu__active">Рок</li>
                <li className="popup-menu__active">Хип-хоп</li>
                <li className="popup-menu__active">Поп-музыка</li>
                <li className="popup-menu__active">Инди</li>
                <li className="popup-menu__active">Техно</li></ul>}
        </div>
    )
}

export default Filter;