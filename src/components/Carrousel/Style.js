import styled from "styled-components"

export const ContainerCarrrosel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 190px;

    img {
        width: 190px;
        border: 2px solid white;
        border-radius: 5px;
    }
    h1 {
        font-size: 13px;
        margin: 7px;
        span {
            font-size: 15px;
            color: #00A04A;
        }
    }
    p {

        font-size: 13px;
        margin: 7px;
        span {
            font-size: 15px;
            color: #00A04A;
        }
    }
    ul {
        list-style: none;
        color: #00A04A;
        font-size: 15px;
        li {
            font-size: 13px;
            margin: 5px;
            color: white;
        }
    }
    span {
        margin-top: 7px;
        a {
            margin: 5px;
            cursor: pointer;
            color: #00A04A;
            text-decoration: underline;
            text-decoration-color: #00A04A;
        }
    }
    @media (min-width:426px) and (max-width:768px) {
        width: 310px;
        display: flex;
        img {
            width: 280px;
        }
        h1 {
            font-size: 15px;
            text-align: center;
            span {
                font-size: 17px;
            }
        }
        p {
            font-size: 15px;
            text-align: center;
            span {
                font-size: 17px;
            }
        }
        ul {
        list-style: none;
        color: #00A04A;
        font-size: 17px;
        li {
            font-size: 15px;
            margin: 5px;
            color: white;
        }
        }
    span {
        margin-top: 7px;
        font-size: 17px;
        a {
            font-size: 17px;
            margin: 5px;
            cursor: pointer;
            color: #00A04A;
            text-decoration: underline;
            text-decoration-color: #00A04A;
        }
    }
    }
    @media (min-width:769px) and (max-width:1024px) {
        width: 500px;
        display: flex;
        img {
            width: 400px;
            margin-bottom: 15px;
        }
        h1 {
            font-size: 20px;
            text-align: center;
            span {
                font-size: 22px;
            }
        }
        p {
            font-size: 20px;
            text-align: center;
            span {
                font-size: 22px;
                text-align: left;
            }
        }
        ul {
        list-style: none;
        color: #00A04A;
        font-size: 22px;
        li {
            font-size: 20px;
            margin: 5px;
            color: white;
        }
        }
    span {
        margin-top: 12px;
        font-size: 20px;
        a {
            font-size: 22px;
            margin: 5px;
            cursor: pointer;
            color: #00A04A;
            text-decoration: underline;
            text-decoration-color: #00A04A;
        }
        }
    }


    @media (min-width:1025px) and (max-width:1440px) {
        width: 700px;
        display: flex;
        img {
            width: 550px;
            margin-bottom: 15px;
        }
        h1 {
            font-size: 23px;
            padding: 5px;
            text-align: center;
            span {
                font-size: 26px;
            }
        }
        p {
            font-size: 22px;
            text-align: center;
            padding: 10px;
            span {
                font-size: 26px;
                text-align: left;
            }
        }
        ul {
        list-style: none;
        color: #00A04A;
        font-size: 26px;
        padding: 10px;
        li {
            font-size: 23px;
            margin: 5px;
            color: white;
        }
        }
    span {
        margin-top: 12px;
        font-size: 24px;
        padding: 5px;
        a {
            font-size: 18px;
            margin: 5px;
            cursor: pointer;
            color: #00A04A;
            text-decoration: underline;
            text-decoration-color: #00A04A;
        }
        }
    }
    @media (min-width:1441px) and (max-width:1700px) {
        width: 600px;
        display: flex;
        img {
            width: 300px;
            margin-bottom: 15px;
        }
        h1 {
            font-size: 20px;
            padding: 5px;
            text-align: center;
            span {
                font-size: 22px;
            }
        }
        p {
            font-size: 20px;
            text-align: center;
            padding: 5px;
            span {
                font-size: 22px;
                text-align: left;
            }
        }
        ul {
        list-style: none;
        color: #00A04A;
        font-size: 22px;
        padding: 5px;
        li {
            font-size: 20px;
            margin: 5px;
            color: white;
        }
        }
    span {
        margin-top: 12px;
        font-size: 20px;
        padding: 5px;
        a {
            font-size: 18px;
            margin: 5px;
            cursor: pointer;
            color: #00A04A;
            text-decoration: underline;
            text-decoration-color: #00A04A;
        }
        }
    }
`