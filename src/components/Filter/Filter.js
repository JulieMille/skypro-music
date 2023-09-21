import { useState } from 'react';
import classNames from 'classnames';
import * as S from './Filter.styles'

export const Filter = () => {
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
        <S.CenterblockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            {isAuthorOpen ? 
            <S.FilterButtonActive className='_btn-text' onClick={handleAuthor}>исполнителю</S.FilterButtonActive> 
             :  
            <S.FilterButton className='_btn-text' onClick={handleAuthor}>исполнителю</S.FilterButton>
            }
        
            {isAuthorOpen && <S.PopupMenuAuthor>
                <S.PopupMenuActive>Nero</S.PopupMenuActive>
                <S.PopupMenuActive>Dynoro, Outwork, Mr. Gee</S.PopupMenuActive> 
                <S.PopupMenuActive>Nero</S.PopupMenuActive>
                <S.PopupMenuActive>Dynoro, Outwork, Mr. Gee</S.PopupMenuActive>
                <S.PopupMenuActive>Nero</S.PopupMenuActive>
                <S.PopupMenuActive>Dynoro, Outwork, Mr. Gee</S.PopupMenuActive>
                <S.PopupMenuActive>Nero</S.PopupMenuActive>
                <S.PopupMenuActive>Dynoro, Outwork, Mr. Gee</S.PopupMenuActive>
                </S.PopupMenuAuthor>}

            {isYearOpen ? 
            <S.FilterButtonActive className='_btn-text' onClick={handleYear}>году выпуска</S.FilterButtonActive> 
             :  
            <S.FilterButton className='_btn-text' onClick={handleYear}>году выпуска</S.FilterButton>
            }
            
            {isYearOpen && <S.PopupMenuYear>
                <S.PopupMenuActive>1995</S.PopupMenuActive>
                <S.PopupMenuActive>2002</S.PopupMenuActive>
                <S.PopupMenuActive>1993</S.PopupMenuActive>
                <S.PopupMenuActive>2000</S.PopupMenuActive>
                </S.PopupMenuYear>}

            {isGenreOpen ? 
            <S.FilterButtonActive className='_btn-text' onClick={handleGenre}>жанру</S.FilterButtonActive> 
             :  
            <S.FilterButton className='_btn-text' onClick={handleGenre}>жанру</S.FilterButton>
            }
            
            {isGenreOpen && <S.PopupMenuGenre>
                <S.PopupMenuActive>Рок</S.PopupMenuActive>
                <S.PopupMenuActive>Хип-хоп</S.PopupMenuActive>
                <S.PopupMenuActive>Поп-музыка</S.PopupMenuActive>
                <S.PopupMenuActive>Инди</S.PopupMenuActive>
                <S.PopupMenuActive>Техно</S.PopupMenuActive></S.PopupMenuGenre>}
        </S.CenterblockFilter>
    )
}