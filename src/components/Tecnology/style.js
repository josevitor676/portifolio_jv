import styled from "styled-components"

export const ContainerTecnology = styled.div`
    color: white;

    h4 {
        text-align: center;
        margin-top: 10px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 5px;

        p{
            display: flex;
            align-items: center;
            margin: 5px;
            svg {
                margin-right: 10px;
                font-size: 20px;
                color: #00A04A;
            }
        }
    }
    @media (min-width:426px) and (max-width:768px) {
        margin-bottom: 40px;
        h4 {
            font-size: 20px;
        }
        div {
            p {
                font-size: 18px;
                svg {
                    font-size: 22px;
                }
            }
        }
    }
    @media (min-width:769px) and (max-width:1024px) {
        margin-bottom: 40px;
        h4 {
            font-size: 22px;
        }
        div {
            p {
                font-size: 20px;
                svg {
                    font-size: 24px;
                }
            }
        }
    }
    @media (min-width:1025px) and (max-width:1440px) {
        margin-bottom: 45px;
        h4 {
            font-size: 35px;
        }
        div {
            p {
                margin: 15px;
                font-size: 24px;
                svg {
                    font-size: 35px;
                    margin-right: 20px;
                }
            }
        }
    }
`