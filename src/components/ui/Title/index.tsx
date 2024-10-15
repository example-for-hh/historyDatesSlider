import React, { FC } from 'react';
import styled, { css, CSSProp } from 'styled-components';
import LineImage from '@assets/images/line.png';
import { mediaQueries } from '@src/styles';

type TitleProps = {
    title: string | React.ReactNode;
    type: 'h1' | 'h2';
};

const headingStyles: { [key in 'h1' | 'h2']: CSSProp } = {
    h1: css`
        font-size: 56px;
        color: #42567a;
        position: absolute;
        margin-block-start: -45px;
        padding-inline-start: 78px;
        &::before {
            content: '';
            position: absolute;
            inset-inline-start: 0;
            inset-block-start: 15px;
            inline-size: 6px;
            block-size: 120px;
            background-image: url(${LineImage});
            background-size: contain;
            background-repeat: no-repeat;
        }
        ${mediaQueries('xl', 'max')`
            font-size: 46px;
        `}
        ${mediaQueries('md', 'max')`
            position: relative;
            font-size: 20px;
            margin-block-start: 59px;
            padding-inline-start: 0;
            margin-block-end: 56px;
            block-size: max-content;
            &::before {
                content: none;
            }
        `}
    `,
    h2: css`
        font-size: 36px;
        color: #42567a;
    `,
};

const StyledTitle = styled.h1<{ as: 'h1' | 'h2' }>`
    ${(props) => headingStyles[props.as as keyof typeof headingStyles]}
`;

const Title: FC<TitleProps> = ({ title, type }) => {
    return <StyledTitle as={type}>{title}</StyledTitle>;
};

export default Title;
