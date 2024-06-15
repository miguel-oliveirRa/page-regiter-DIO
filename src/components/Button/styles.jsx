import styled , { css } from "styled-components";


export const ButtonContainer = styled.button`
    position: relative;
    width: 120px;

    background: #565656;
    color: #FFF;
    padding: 2px 12px; 
    margin: 2px 5px;
    border-radius: 22px;
    font-size: 14px;
    cursor: pointer;

    ${ ({ variant }) => variant !== "primary" && css`
        width: 80%;
        background: #E4105D;
        border: 1px solid #E4105D; 
        
        &:hover{
            opacity: .6;
            cursor: pointer;
        }

        &::after{
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -5px;
            left: -6px;            
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
        
    ` }
` 
