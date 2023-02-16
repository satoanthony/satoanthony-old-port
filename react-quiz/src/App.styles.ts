import style, {createGlobalStyle} from 'styled-components';
import BGImage from '/imgs/bck.jpg';

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%
}

body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    paddind: 0 20px;
    justifyw-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    
}
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: colum;
    align-items: center;

    >p{
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }
`

