import styled from 'styled-components';
import { clearButton } from '../../utils/constants';

export const BotLineStyledContainer = styled.div`
    height: 50px;
    display: ${props => props.todoIsStarted ? "flex" : "none"};
    justify-content: space-between;
    width: 100%;
    color: #777;
    @media screen and (min-width: 320px) and (max-width:370px) {
        height: 150px;
    }
::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 550px;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2),
                0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, 0.2);
    @media screen and (min-width: 320px) and (max-width:370px) {
        width: 100%;
        height: 150px;
    }
    @media screen and (min-width: 370px) and (max-width:1280px) {
        width: 100%; 
    }
}


.botLine__count {
    padding-top: 10px;
    padding-left: 10px;
}

.botLine__button {
    border: 1px solid;
    border-color: #ffffff;
    background-color: #ffffff;
    color: #777;
    font-size: 14px;
}

.botLine__clearButton{
    border: 1px solid;
    border-color: #ffffff;
    background-color: #ffffff;
    color: ${props => props.someIsChecked ? clearButton.black : clearButton.white};
    font-size: 14px;
}

.botLine__clearButton:hover {
    border-color: rgba(175, 47, 47, 0.1);
}

.botLine__button:hover {
    border-color: rgba(175, 47, 47, 0.1);
}

#${props => props.selectedButton} {
    border-color: rgba(175, 47, 47, 0.2);
}

.botLine__centralButtons {
    display: flex;
    justify-content: space-between;
}
`;