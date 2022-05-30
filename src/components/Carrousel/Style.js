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
`