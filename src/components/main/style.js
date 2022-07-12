import styled from "styled-components"

export const MainContainer = styled.main`
    color: white;
    border-bottom: 2px solid #333;
    div {
        padding: 10px;
        display: flex;
        flex-direction: column;
        h2 {
            text-align: center;
            font-size: 18px;
            line-height: 30px;
        }
    }
    div {
        
        img {
            width: 200px;
            margin: 10px auto;
        }
    }

    @media (min-width:426px) and (max-width:768px) {
        display: flex;
        align-items: center;
        height: 330px;
        div {
            flex: 1;
            h2 {
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 8px;
            }
        }
        div {
            img {
                width: 180px;
            }
        }
    }
    @media (min-width:769px) and (max-width:1024px) {
        display: flex;
        align-items: center;
        height: 380px;
        div {
            flex: 1;
            h2 {
                font-size: 20px;
                line-height: 30px;
                margin-bottom: 15px;
            }
        }
        div {
            img {
                width: 240px;
            }
        }
    }
    @media (min-width:1025px) and (max-width:1440px) {
        display: flex;
        align-items: center;
        height: 480px;
        div {
            flex: 1;
            h2 {
                font-size: 25px;
                line-height: 33px;
                margin-bottom: 20px;
            }
        }
        div {
            img {
                width: 280px;
            }
        }
    }
    @media (min-width:1441px) and (max-width:1700px) {
        display: flex;
        align-items: center;
        height: 530px;
        div {
            flex: 1;
            h2 {
                font-size: 28px;
                line-height: 38px;
                margin-bottom: 20px;
            }
        }
        div {
            img {
                width: 320px;
            }
        }
    }
`