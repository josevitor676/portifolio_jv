import styled from "styled-components"

export const ContainerAbout = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    img {
        width: 150px;
        border:2px solid white;
        border-radius: 10px;
        transition: ease-in 0.4s;
        :hover {
            width: 155px;
        }
    }

    div {
        text-align: center;
        h4{
            color: white;
            margin-top: 15px;
            span {
                color: #00A04A;
            }
        }
        p {
            padding: 10px;
            line-height: 23px;
            text-align: initial;
        }
    }
    ul {
        padding: 10px;
        list-style: none;
        li {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 13px;
            span {
                color: #00A04A;
                font-size: 14px;
            }
        }
    }
`