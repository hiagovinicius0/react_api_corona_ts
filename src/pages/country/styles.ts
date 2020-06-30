import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #A8A8B3;
        transition: color 0.2s;
        &:hover{
            color: #666;
        }
        svg {
            margin-right: 4px;
        }
    }
`;
export const CountryInfo = styled.section`
    margin-top: 80px;
    header{
        display: flex;
        align-items: center;
        div{
            margin-left: 24px;
            strong{
                font-size: 36px;
                color: #3D3D4D;
            }
            p{
                font-size: 18px;
                color: #737380;
                margin-top: 24px;
            }
        }
    }
    ul{
        display: flex;
        list-style: none;
        margin-top: 40px;
        li{
            & + li{
                margin-left: 80px;
            }
            strong{
                display:block;
                font-size: 36px;
                color: #3D3D4D;
            }
            span{
                display: block;
                margin-top: 4px;
                color: #6C6C80;
            }
        }
    }
`
export const Title = styled.h1 `
    font-size: 32px;
    color: #3A3A3A;
    max-width: 400px;
    line-height: 56px;
    margin-top: 15px;
`
export const History = styled.div`
    margin-top: 80px;
    a{
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        color: #3A3A3A;
        transition: 0.2s;
        & + a{
            margin-top: 16px;
        }
        &:hover{
            transform: translateX(10px);
        }
        h1{
            font-size: 20px;
            text-decoration: none;
            font-weight: normal;
        }
        div{
            display:block;
            flex: 1;
            padding: 0 20px 0 20px;
            &:nth-last-child(-n+3){
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

        svg{
            margin-left: auto;
            color: #CBCBD6;
            display: flex;
        }
    }
`


