import styled from "styled-components"

export const ContainerEmail = styled.form `
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-top: 2px solid #333;
    h2 {
        text-align: center;
        color: white;
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 22px;
    }
    input {
        padding: 10px;
        border-radius: 10px;
        width: 300px;
        margin: 10px auto;
        outline: none;
        background: #eee;
    }
    textarea {
        padding: 10px;
        outline: none;
        background: #eee;
        border-radius: 10px;
        width: 300px;
        height: 150px;
        margin: 10px auto;
    }
    @media (min-width:426px) and (max-width:768px) {
        h2 {
            text-align: center;
            color: white;
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 28px;
        }
        input {
            padding: 10px;
            border-radius: 10px;
            width: 350px;
            margin: 10px auto;
            outline: none;
            background: #eee;
        }
        textarea {
            padding: 10px;
            outline: none;
            background: #eee;
            border-radius: 10px;
            width: 350px;
            height: 150px;
            margin: 10px auto;
        }
    }
    @media (min-width:769px) and (max-width:1700px) {
        h2 {
            text-align: center;
            color: white;
            margin-top: 15px;
            margin-bottom: 10px;
            font-size: 28px;
        }
        input {
            padding: 10px;
            border-radius: 10px;
            width: 400px;
            margin: 10px auto;
            outline: none;
            background: #eee;
        }
        textarea {
            padding: 10px;
            outline: none;
            background: #eee;
            border-radius: 10px;
            width: 400px;
            height: 150px;
            margin: 10px auto;
        }
    }
`