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
    

    @media (min-width:426px) and (max-width:768px) {
        display: flex;
        flex-direction: row;
        img {
            margin: 0 auto;
            width: 140px;
            :hover {
            width: 145px;
            }
        }
        
        div {
            flex: 1;
            h4 {
                font-size: 14px;
            }
            p {
                font-size: 12px;
                text-align: center;
            }
        }
    }
    @media (min-width:769px) and (max-width:1024px) {
        display: flex;
        flex-direction: row;
        img {
            margin: 0 auto;
            width: 170px;
            :hover {
            width: 175px;
            }
        }
        
        div {
            flex: 1;
            h4 {
                font-size: 20px;
            }
            p {
                font-size: 14px;
                text-align: center;
            }
        }
    }

    @media (min-width:1025px) and (max-width:1440px) {
        display: flex;
        flex-direction: row;
        img {
            margin: 0 auto;
            width: 210px;
            :hover {
            width: 215px;
            }
        }
        
        div {
            flex: 1;
            h4 {
                font-size: 30px;
            }
            p {
                font-size: 19px;
                text-align: center;
            }
        }
    }
`