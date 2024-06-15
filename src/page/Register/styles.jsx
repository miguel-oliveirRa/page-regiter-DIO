import styled, { css } from "styled-components";

export const Wrapper = styled.main`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
` 

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 80vh;
    max-width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    
    h1{
        color: #FFF;
        font-size: 32px;
        font-weight: 700;
        margin: 13px 0; 
    }

    p.sec{
        color: #FFF;
        font-weight: 400;
        line-height: 20px;
        padding: 15px 0;
        margin: 0 auto;
    } 

`

export const TextContent = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${ ({ small }) => small === "secondary" && css`
        width: 320px;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        
        p{
            color: #FFF;
            font-weight: 400;
            line-height: 20px;
            padding: 5px 0;
        }

        a.login{
            color: #00FF00;
            text-decoration: none;

            &:hover{
                opacity: .4;

            }
        }

    ` }
`

export const Column = styled.div`
    display: flex;
    width: 56%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
`
