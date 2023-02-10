import styled from "styled-components";

export const StyledOrdersummary = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    height: 500px;
    background-color: var(--Very-pale-blue);
    border-radius: 15px;
    box-shadow:0 10px 20px 5px rgba(0, 0, 0, 0.2);
`
export const Ordersummaryimage = styled.img`
    position: relative;
    height: 32%;
    width: 100%;
    border-radius: 15px 15px 0 0;
`
export const Ordersummaryplan = styled.div`
    justify-content: space-between;
`
export const Annualplansection = styled.section`
    display: flex;
    background-color: var(--Semi-Pale-blue);
    border-radius:8px;
    padding: 3px;
    margin: 10px 25px 0;
    align-items:center;
    justify-content: center;
`
export const Annualplanicon = styled.img`
    height: 35px;
    margin: 5px;
`
export const Annualplaninfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: start;
    padding: 10px;
`
export const Proceedbutton = styled.button`
    font-size:.7em;
    font-weight: var(--bold);
    color:var(--Very-pale-blue);
    background-color:var(--Bright-blue);
    margin: 25px 20px 0;
    width:85%;
    height: 25%;
    border-style:none;
    border-radius: 8px;
    box-shadow: 0 12px 5px 1px rgba(0, 0, 0, 0.1);
    &:hover{
        cursor: pointer;
        background-color:var(--Desaturated-blue);
    }
`
export const CancelButton = styled(Proceedbutton)`
    color: var(--Desaturated-blue);
    background-color:var(--Very-pale-blue);
    margin: 18px 100px 0;
    width: auto;
    height: auto;
    box-shadow: none;
    &:hover{
        cursor: pointer;
        color: var(--Dark-blue);
        background-color:var(--Very-pale-blue);
    }
`
export const Attribution = styled.div`
    display: flex;
    margin: 10px auto 0;
    font-size: 11px;
    text-align: center;
    @media screen and (max-width:600px){
        flex-direction: column;
    }
`
export const AttributionA = styled(Attribution)`
    color: hsl(228, 45%, 44%);
`