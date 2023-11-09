import { useState } from 'react';
import classNames from 'classnames';
import * as S from './Filter.styles'
import { useSelector } from 'react-redux';

export const Filter = ({setBaseFilters, filterTracksByGenre, filterTracksByAuthor, sortUp, sortDown, sortBack }) => {
    const [isAuthorOpen, setIsAuthorOpen] = useState(false);
    const [isYearOpen, setIsYearOpen] = useState(false);
    const [isGenreOpen, setIsGenreOpen] = useState(false);
    const realTracks = useSelector((state) => state.currentPlaylist);
    const authors = getUniqueAuthors(realTracks);
    const genres = getUniqueGenres(realTracks);
    const [chosenAuthors, setChosenAuthors] = useState([]);
    const [chosenGenres, setChosenGenres] = useState([]);

    // function handleChosenAuhors (el) {
        
    //     if (chosenAuthors.includes(el)) {
    //         setChosenAuthors((prev) => prev.filter((item) => item !== el))
    //         const array = chosenAuthors.filter((item) => item !== el)
    //         if (array.length === 0) {
    //             return authors
    //         } else { 
    //             setBaseFilters((prev) => {
    //                 prev.authors = array;
    //                 return prev
    //             })
    //             return array
    //         }
    //     } else {
    //         setChosenAuthors((prev) => [...prev, el])
    //         const arr = [...chosenAuthors, el]
    //         setBaseFilters((prev) => {
    //             prev.authors = arr;
    //             return prev
    //         })
    //         return arr
    //     }
    // }
    
    function handleChosenAuthors(el) {
        if (chosenAuthors.includes(el)) {
          const updatedChosenAuthors = chosenAuthors.filter(item => item !== el);
          setChosenAuthors(updatedChosenAuthors);
      
          if (updatedChosenAuthors.length === 0) {
            setBaseFilters(prev => {
              return { ...prev, authors: [] };
            });
          } else {
            setBaseFilters(prev => {
              return { ...prev, authors: updatedChosenAuthors };
            });
          }
      
          return updatedChosenAuthors;
        } else {
          const updatedChosenAuthors = [...chosenAuthors, el];
          setChosenAuthors(updatedChosenAuthors);
          setBaseFilters(prev => {
            return { ...prev, authors: updatedChosenAuthors };
          });
      
          return updatedChosenAuthors;
        }
      }

    // function handleChosenGenres (el) {
    //     setChosenAuthors([]);
    //     if (chosenGenres.includes(el)) {
    //         setChosenGenres((prev) => prev.filter((item) => item !== el))
    //         const array = chosenGenres.filter((item) => item !== el)
    //         if (array.length === 0) {
    //             return genres
    //         } else { return array
    //         }
    //     } else {
    //         setChosenGenres((prev) => [...prev, el])
    //         const arr = [...chosenGenres, el]
    //         return arr
    //     }
    // }

    function handleChosenGenres(el) {
        if (chosenGenres.includes(el)) {
          const updatedChosenGenres = chosenGenres.filter(item => item !== el);
          setChosenGenres(updatedChosenGenres);
      
          if (updatedChosenGenres.length === 0) {
            setBaseFilters(prev => {
              return { ...prev, genres: [] };
            });
          }
      
          return updatedChosenGenres;
        } else {
          const updatedChosenGenres = [...chosenGenres, el];
          setChosenGenres(updatedChosenGenres);
          setBaseFilters(prev => {
            return { ...prev, genres: updatedChosenGenres };
          });
      
          return updatedChosenGenres;
        }
      }

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

    function getUniqueAuthors(data) {
        const uniqueAuthors = {};
        data.forEach((item) => {
          const author = item.author;
          if (author !== "-") {
            uniqueAuthors[author] = true;
          }
        });
        const uniqueAuthorsArray = Object.keys(uniqueAuthors);
        return uniqueAuthorsArray;
      }

      function getUniqueGenres(data) {
        const uniqueGenres = {};
        data.forEach((item) => {
          const genre = item.genre;
          if (genre !== "-") {
            uniqueGenres[genre] = true;
          }
        });
        const uniqueGenresArray = Object.keys(uniqueGenres);
        return uniqueGenresArray;
      }
      
    return (
        <S.CenterblockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            {isAuthorOpen ? 
            <S.FilterButtonActive className='_btn-text' onClick={handleAuthor}>
                {(chosenAuthors.length > 0) && <S.Tbl>{chosenAuthors.length}</S.Tbl>}исполнителю</S.FilterButtonActive> 
             :  
            <S.FilterButton className='_btn-text' onClick={handleAuthor}>
                {(chosenAuthors.length > 0) && <S.Tbl>{chosenAuthors.length}</S.Tbl>}исполнителю</S.FilterButton>
            }
        
            {isAuthorOpen && <S.PopupMenuAuthor>
                {authors.map((el) => <S.PopupMenuActive onClick={() => filterTracksByAuthor(handleChosenAuthors(el), chosenGenres.length)} key={Math.random()}>{el}</S.PopupMenuActive> )}
                </S.PopupMenuAuthor>}

            {isYearOpen ? 
            <S.FilterButtonActive className='_btn-text' onClick={handleYear}>году выпуска</S.FilterButtonActive> 
             :  
            <S.FilterButton className='_btn-text' onClick={handleYear}>году выпуска</S.FilterButton>
            }
            
            {isYearOpen && <S.PopupMenuYear>
                <S.PopupMenuActive onClick={() => {
                    sortBack();
                    setIsYearOpen(false)}}>По умолчанию</S.PopupMenuActive>
                <S.PopupMenuActive onClick={() => {
                    sortDown();
                    setIsYearOpen(false)
                }}>Сначала новые</S.PopupMenuActive>
                <S.PopupMenuActive onClick={() => {
                    sortUp();
                    setIsYearOpen(false)
                }}>Сначала старые</S.PopupMenuActive>
                </S.PopupMenuYear>}

            {isGenreOpen ? 
            <S.FilterButtonActive className='_btn-text' onClick={handleGenre}>
                {(chosenGenres.length > 0) && <S.Tbl>{chosenGenres.length}</S.Tbl>}жанру</S.FilterButtonActive> 
             :  
            <S.FilterButton className='_btn-text' onClick={handleGenre}>
                {(chosenGenres.length > 0) && <S.Tbl>{chosenGenres.length}</S.Tbl>}жанру</S.FilterButton>
            }
            
            {isGenreOpen && <S.PopupMenuGenre>
                {genres.map((el) => <S.PopupMenuActive onClick={() => filterTracksByGenre(handleChosenGenres(el))} key={Math.random()}>{el}</S.PopupMenuActive> )}
                </S.PopupMenuGenre>}
        </S.CenterblockFilter>
    )
}