import styled from "styled-components";
import bgdesktop from '../images/pattern-background-desktop.svg';

export const Container = styled.div`
    --Pale-blue: hsl(225, 100%, 94%);
    --Semi-Pale-blue: hsl(225, 100%, 97%);
    --Bright-blue: hsl(245, 75%, 52%);
    --Very-pale-blue: hsl(225, 100%, 98%);
    --Desaturated-blue: hsl(224, 23%, 55%);
    --Dark-blue: hsl(223, 47%, 23%);
    font-size: 16px;
    font-family: 'Red Hat Display';
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width:100wh;
    align-items: center;
    justify-content: center;
    background-color: var(--Pale-blue);
    background-image: url(${bgdesktop});
    background-size:100%;
    background-repeat: no-repeat;
    --medium: 500;
    --bold: 700;
    --ultrabold: 900;
    h2{
        font-size: 1.2em;
        font-weight:var(--ultrabold);
        color: var(--Dark-blue);
        margin: 30px auto 5px;
    }

    h3{
        font-size: .8em;
        font-weight: var(--medium);
        color: var(--Desaturated-blue);
        margin: 2px;
    }

    h4{
        font-size: .8em;
        font-weight: var(--ultrabold);
        color: var(--Dark-blue);
        margin: 2px;
    }

    h5{
        font-size: .75em;
        font-weight: var(--bold);
        color: var(--Bright-blue);
        text-decoration: underline;
        margin-left: auto;
        padding-right: 10px;
        align-self: center;
        &:hover{
            text-decoration: none;
            color: var(--Desaturated-blue);
            cursor: pointer;
        }
    }

    p{
        font-size: .8em;
        font-weight: var(--medium);
        color: var(--Desaturated-blue);
        margin: 8px 30px;
        text-align: center;
        line-height: 1.5em;
    }

`