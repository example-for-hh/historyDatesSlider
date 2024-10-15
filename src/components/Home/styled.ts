import { mediaQueries } from '@src/styles';
import { styled } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Section = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    block-size: 100vh;
    inline-size: 100vw;
    overflow: hidden;
    max-inline-size: 1440px;
    margin: 0 auto;
    border-inline-start: 1px solid rgba(66, 86, 122, 0.2);
    border-inline-end: 1px solid rgba(66, 86, 122, 0.2);
   
    &::before,
    &::after {
        content: '';
        position: absolute;
        background-color: rgba(66, 86, 122, 0.2);
    }

    &::before {
        inline-size: 100%;
        block-size: 1px;
        inset-block-start: 50%;
        transform: translateY(-50%);
    }

    &::after {
        block-size: 100%;
        inline-size: 1px;
        inset-inline-start: 50%;
        transform: translateX(-50%);
    }
    ${mediaQueries('md', 'max')`
        border: none;
        padding: 0 20px;
        flex-direction: column;
        inline-size: auto;
        &::before,
        &::after {
            content: none;
        }
    `}
`;
export const Wrapper = styled.div`
    display: flex;
    inline-size: 100%;
    position: relative;
    ${mediaQueries('md', 'max')`
        &::after {
            content: '';
            position: absolute;
            background-color: rgba(66, 86, 122, 0.2);
        }
        flex-direction: column;
        flex-basis: 50%;
        border-block-end: 1px solid rgba(66, 86, 122, 0.2);
    `}
`;

export const CircleWrapper = styled.div`
    flex: 1 1 auto;
`;

export const MinDate = styled.div`
    color: #5d5fef;
    text-align: center;
    font-family: 'PT Sans';
    font-size: 200px;
    font-style: normal;
    font-weight: 700;
    line-height: 160px;
    letter-spacing: -4px;
    position: absolute;
    inset-inline-start: 15%;
    ${mediaQueries('xl', 'max')`
          font-size: 150px;
    `}
    ${mediaQueries('lg', 'max')`
          font-size: 100px;
    `}
    ${mediaQueries('md', 'max')`
        position: relative;
        font-size: 56px;
        line-height: normal;
        inset-inline-start: 0;
        letter-spacing: -1.12px;
    `}
`;

export const MaxDate = styled.div`
    color: #ef5da8;
    text-align: center;
    font-family: 'PT Sans';
    font-size: 200px;
    font-style: normal;
    font-weight: 700;
    line-height: 160px;
    letter-spacing: -4px;
    position: absolute;
    inset-inline-end: 15%;
    ${mediaQueries('xl', 'max')`
          font-size: 150px;
    `}
    ${mediaQueries('lg', 'max')`
          font-size: 100px;
    `}
    ${mediaQueries('md', 'max')`
        position: relative;
        font-size: 56px;
        line-height: normal;
        inset-inline-end: 0;
        letter-spacing: -1.12px;
    `}
`;

export const CircleWr = styled.div`
    position: relative;
    z-index: 2;
    ${mediaQueries('md', 'max')`
        display: none
    `}
`;

export const NavButton = styled.button`
    position: absolute;
    inset-block-start: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }

    &:focus {
        outline: none;
    }
`;

export const PrevButton = styled(NavButton)`
    inset-inline-start: 10px;
`;

export const NextButton = styled(NavButton)`
    inset-inline-end: 10px;
`;

export const SwiperNavigation = styled.div`
    position: absolute;
    inset-inline-start: 80px;
    inset-block-end: 0;
    z-index: 2;
    ${mediaQueries('md', 'max')`
      inset-inline-start: 0;
      inset-block-end: -100%;
    `}
`;

export const SwiperNavigationWrapper = styled.div`
    button {
       
        &:only-child {
            margin: 0;
        }

        &:not(:first-child) {
            margin-inline-start: 10px;
        }

        &:not(:last-child) {
            margin-inline-end: 10px;
        }

        &:not(:first-child):not(:last-child) {
            margin: 0 5px;
        }
        ${mediaQueries('md', 'max')`
        

          svg {
                block-size: 25px;
                inline-size: 25px;
            }

            &:only-child {
                margin: 0;
            }

            &:not(:first-child) {
                margin-inline-start:5px;
            }

            &:not(:last-child) {
                margin-inline-end: 5px;
            }

            &:not(:first-child):not(:last-child) {
                margin: 0 2.5px;
            }

        `}
    }
`;

export const SwiperStyled = styled(Swiper)`
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    ${mediaQueries('md', 'max')`
        justify-content: space-between;
    `}
        .swiper-wrapper {
       display:none
    }

`;

export const SwiperCounter = styled.div`
    padding-block-end: 20px;
    color: #42567a;
    ${mediaQueries('md', 'max')`
        padding-block-end: 10px;
    `}
`;

export const CurrentSlide = styled.span``;

export const Divider = styled.span``;
export const TotalSlides = styled.span``;

export const SliderContainer = styled.div`
    position: absolute;
    inline-size: 100%;
    inset-block-end: 0;
    ${mediaQueries('md', 'max')`
        position: relative;
        flex-basis: 50%;
        inset-block-end: 0;
        padding-block-start: 20px
    `}
`;

export const SlideItem = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;
