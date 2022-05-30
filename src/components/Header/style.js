import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    border-bottom: 2px solid #333;
    div {
        margin:15px;
        h1 {
            margin: 0;
            color: #00A04A;
            font-size: 30px;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        a{
            margin: 7px;
            color: white;
            text-decoration: none;
            transition: ease-in 0.4s;
            :hover {
                color: #00A04A;
            }
        }
    }
    @media (min-width:426px) and (max-width:768px) {
        display: flex;
        flex-direction: row;
        padding: 15px;
        div {
            margin:10px;
            h1 {
                font-size: 17px;
            }
        }

        div {
            display: flex;
            flex-direction: row;
            margin: 2px;
            a {
                font-size: 14px;
                margin: 6px;
            }
        }
    }
    @media (min-width:769px) and (max-width:1024px) {
        display: flex;
        flex-direction: row;
        padding: 15px;
        div {
            margin:10px;
            h1 {
                font-size: 33px;
                margin-left: 15px;
            }
        }

        div {
            display: flex;
            flex-direction: row;
            margin: 5px;
            a {
                font-size: 16px;
                margin: 8px;
            }
        } 
    }
    @media (min-width:1025px) and (max-width:1440px) {
        display: flex;
        flex-direction: row;
        padding: 20px;
        div {
            margin:10px;
            h1 {
                font-size: 37px;
                margin-left: 20px;
            }
        }

        div {
            display: flex;
            flex-direction: row;
            margin: 7px;
            a {
                font-size: 20px;
                margin: 10px;
            }
        } 
    }
`