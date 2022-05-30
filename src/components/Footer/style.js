import styled from "styled-components"

export const FooterContent = styled.footer `
    color: white;
    padding: 7px;
    border-top: 2px solid #333;
    svg {
        color: #00A04A;
        font-size: 16px;
        margin-right: 7px;
    }
    p{
        display: flex;
        font-size: 12px;
    }
    @media (min-width:426px) and (max-width:768px) {
        padding: 10px;
        svg {
            font-size: 18px;
        }
        p {
            font-size: 15px;
        }
    }
    @media (min-width:769px) and (max-width:1024px)  {
        padding: 10px;
        svg {
            font-size: 20px;
        }
        p {
            font-size: 18px;
            display: flex;
            align-items: center;
        }
    }
    @media (min-width:1025px) and (max-width:1440px) {
        padding: 15px;
        svg {
            font-size: 22px;
        }
        p {
            font-size: 20px;
            display: flex;
            align-items: center;
        }
    }
`