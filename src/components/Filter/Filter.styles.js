import { styled } from 'styled-components';

export const CenterblockFilter = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 51px;
    position: relative;
`

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`

export const PopupMenu = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 34px;
    gap: 10px;
    width: 248px;
    height: 225px;
    border-radius: 12px;
    background: #313131;
    top: 41px;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 10px;
      }
    ::-webkit-scrollbar-track {
        background-color: #f1f1f1;
      }
    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: 5px;
      }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #555;
      }
`
export const PopupMenuAuthor = styled(PopupMenu)`
    left: 86px;
`

export const PopupMenuGenre = styled(PopupMenu)`
    left: 382px;
`

export const PopupMenuYear = styled(PopupMenu)`
    left: 237px;
    width: 221px;
    height: 196px;
`

export const PopupMenuActive = styled.li`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    &:hover {
        color: #B672FF;
        text-decoration-line: underline;
        cursor: pointer;
      }
`

export const FilterButton = styled.div`
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
    margin-left: 10px;
    :not(:last-child) {
        margin-right: 10px;
      }
`

export const FilterButtonActive = styled(FilterButton)`
    border: 1px solid #AD61FF;
    color: #AD61FF;
`

export const Tbl = styled.div`
    border-radius: 50%;
    height: 25px;
    width: 25px;
    background-color: #AD61FF;
    position: absolute;
    top: -13px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`