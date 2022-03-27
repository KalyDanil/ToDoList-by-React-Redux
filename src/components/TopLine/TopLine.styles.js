import styled from 'styled-components';
import { checkAllStyle } from '../../utils/constants';

export const TopLineStyledContainer = styled.div`
    height: 65px;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    border: none ;
    display: flex;
    justify-content: space-between;
    box-shadow: ${props => props.todoIsStarted ? "" : "0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%)"};

.topLine__CheckAll {
    font-size: 22px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    color: ${props => props.todoIsStarted ? checkAllStyle.black : checkAllStyle.white};
}

.topLine__input {
    padding: 16px 16px 16px -5px;
    border: none;
    outline: none;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    width: 86%;
    ::placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }
    @media screen and (min-width: 320px) and (max-width:1280px){
        padding: 15px 0 15px 0;
        margin-left: 50px;
        ::placeholder {
            font-size: 20px;
        }
    }
`;