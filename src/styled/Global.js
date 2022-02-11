import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    body {
        background-color: #e5e5e5;
    }

    h1 {
        margin: 2rem;
        font-size: 2rem;
        color: #e5e5e5;
    }

    p {
        font-size: 1.1rem;
        text-align: right;
        font-style: italic;
        font-weight: bold;
        margin: 0.8rem 0 0 0;
    }

    q {
        font-size: 1.2rem;
    }
`;

export default GlobalStyle;
