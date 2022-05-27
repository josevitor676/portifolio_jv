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
`