import styled from "styled-components"

export const InfoContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;
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
    div {
        ul {
            li {
                display: flex;
                align-items: center;
                svg {
                    font-size: 18px;
                    color: #00A04A;
                }
                a {
                    margin-left: 10px;
                    font-size: 15px;
                    cursor: pointer;
                    padding-bottom: 2px;
                }
            }
        }
    }
    @media (min-width:426px) and (max-width:768px) {
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        ul {
            flex: 1;
            text-align: center;
            li{

            }
        }
        div {
            text-align: center;
            flex: 1;
            ul {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                li {
                    text-align: center;
                }
            }
        }
    }
    @media (min-width:769px) and (max-width:1024px) {
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        ul {
            flex: 1;
            text-align: center;
            li{
                font-size: 18px;
                span {
                    font-size: 20px;
                }
            }
        }
        div {
            text-align: center;
            flex: 1;
            font-size: 22px;
            ul {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                li {
                    text-align: center;
                    svg {
                        font-size: 35px;
                    }
                    a {
                        font-size: 22px;
                    }
                }
            }
        }
    }

    @media (min-width:1025px) and (max-width:1440px) {
        margin-top: 50px;
        margin-bottom: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        ul {
            flex: 1;
            text-align: center;
            li{
                font-size: 22px;
                span {
                    font-size: 24px;
                }
            }
        }
        div {
            text-align: center;
            flex: 1;
            font-size: 26px;
            ul {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                li {
                    text-align: center;
                    svg {
                        font-size: 40px;
                        margin-right: 15px;
                    }
                    a {
                        font-size: 25px;
                    }
                }
            }
        }
    }
`