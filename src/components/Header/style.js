import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    margin: 0 auto;
    flex-direction: column;
    
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