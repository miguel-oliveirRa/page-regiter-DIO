import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`
    
export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    a.home{
        color: #FFF;
        font-size: 17px;
        margin-right: 4px;
        text-decoration: none;
    }
`