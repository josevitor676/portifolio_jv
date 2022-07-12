import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Krona One';
    body::-webkit-scrollbar {
        width: 15px;  
    }   

    body::-webkit-scrollbar-track {
        background: #333;       
    }

    body::-webkit-scrollbar-thumb {
        background-color: #555;    
        border-radius: 20px;    
    }
}
`