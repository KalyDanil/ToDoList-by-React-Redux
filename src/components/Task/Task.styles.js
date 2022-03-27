import styled from 'styled-components';
import { taskStyle } from '../../utils/constants';

export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 58px;
    border-bottom: 1px solid rgb(226, 226, 226);

.task__checkbox {
    margin-top: 10px;
    text-align: center; 
    width: 40px;
    height: 40px;
    -webkit-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    :checked {
        background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
    }
    }
    
:checked {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
}

.task__edit {
    display: ${props => props.isEditing ? "": "none"};
    flex-grow: 1;
    outline: none;
    border: 1px solid rgb(189, 189, 189);
    box-shadow: inset 0px 0px 5px 0px rgba(148, 147, 147, 0.6);
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
}
    
.task__text {
    display: ${props => props.isEditing ? "none": ""};
    font-size: 24px;
    text-align: left;
    margin-top: 3px;
    word-break: break-all;
    padding: 15px 0px 15px 35px;
    font-size: 24px;
    flex-grow: 1;
    color: ${props => props.isCompleted ? taskStyle.gray : ""};
    text-decoration: ${props=>props.isCompleted ? taskStyle.textDecoration : ""};
}

.task__removeButton {
    font-size: 30px;
    color: #cc9a9a;
    margin-top: 20px;
    margin-right: 20px;
    display: ${props => props.buttonIsHidden ? "none" : ""}
}
`;
