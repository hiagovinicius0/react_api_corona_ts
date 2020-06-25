import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1 `
    font-size: 48px;
    color: #3A3A3A;
    max-width: 400px;
    line-height: 56px;
    margin-top: 40px;
`
export const Form = styled.form `
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    select{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border:0;
        border-radius: 5px 0 0 5px;
        color: #3A3A3A;
        &::selection{
            color: #A8A8B3;
        }
    }
    button{
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover{
            background: ${shade(0.2, "#04d361")}
        }
    }
`
export const Countries = styled.div`
    margin-top: 80px;
    max-width: 700px;
    a{
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        align-items: center;
        color: #3A3A3A;
        h1{
            font-size: 24px;
            margin-bottom: 20px;
            text-decoration: none;
            font-weight: normal;
        }
        div{
            display: flex;
            div{
                display:block;
                flex: 1;
                padding: 0 20px 0 20px;
                &:nth-last-child(-n+2){
                    border-left: 1px solid #dadce0;
                }
                strong{
                    font-weight: normal;
                    font-size: 12px;
                    padding-bottom: 20px;
                }
                p{
                    font-weight: bold;
                    margin-top: 5px;
                }
            }
        }
    }
`
