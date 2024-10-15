import { createGlobalStyle } from 'styled-components';

import PTSansRegularWoffTwo from '../assets/fonts/PTSans/PTSans-Regular.woff2';
import PTSansRegularWoff from '../assets/fonts/PTSans/PTSans-Regular.woff';
import PTSansBoldWoffTwo from '../assets/fonts/PTSans/PTSans-Bold.woff2';
import PTSansBoldWoff from '../assets/fonts/PTSans/PTSans-Bold.woff';

import BebasNeueRegularWoffTwo from '../assets/fonts/BebasNeue/BebasNeueRegular.woff2';
import BebasNeueRegularWoff from '../assets/fonts/BebasNeue/BebasNeueRegular.woff';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'PT Sans';
        src: url('${PTSansRegularWoffTwo}') format('woff2'),
        url('${PTSansRegularWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'PT Sans';
        src: url('${PTSansBoldWoffTwo}') format('woff2'),
        url('${PTSansBoldWoff}') format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Bebas Neue';
        src: url('${BebasNeueRegularWoffTwo}') format('woff2'),
        url('${BebasNeueRegularWoff}') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        margin: 0;
        padding: 0;
        background: #F4F5F9;
        font-family: 'PT Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 0;
        margin-block-end: 0;
        margin-block-start: 0;
    }
    button {
        margin: 0;
        padding: 0;
        vertical-align: middle;
        border: 0;
        outline: 0;
        background: none;
        text-decoration: none;
        text-transform: none;
        text-align: center;
        line-height: normal;
        white-space: normal;
        cursor: pointer;
  }
`;

export default GlobalStyles;
