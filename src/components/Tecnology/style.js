import styled from "styled-components"

export const ContainerTecnology = styled.div`
    color: white;

    h4 {
        text-align: center;
        margin-top: 10px;
    }

    div {
        list-style: none;
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
`