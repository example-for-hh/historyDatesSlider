import { mediaQueries } from "@src/styles";
import styled from "styled-components";
import { Swiper } from 'swiper/react';
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

    /* block-size: 135px; */
`;

export const StyledSwiper = styled(Swiper)`
    & {
        padding: 0 80px;
        ${mediaQueries('md', 'max')`
            padding: 0;
        `}
    }

    .swiper-wrapper {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }

    .swiper-slide {
        flex: 0 0 auto;
    }

    .swiper-slide:last-child {
        margin-inline-end: 0;
    }
`;

export const SlideText = styled.div`
    font-size: 20px;
    color: #42567a;
`;
export const SlideYear = styled.div`
    font-family: 'Bebas Neue';
    font-size: 25px;
    color: #3877ee;
    padding-block-end: 15px;
`;

export const StyledSwiperButtonPrev = styled.div`
  color: white;

  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: 10px;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  

  svg {
    inline-size: 40px;
    block-size: 40px;
    circle {
      fill: #fff;
      stroke: none;
    }
    path {
      stroke: #3877EE;
    }
  }
  ${mediaQueries('md', 'max')`
       display: none;
    `}

`;

export const StyledSwiperButtonNext = styled.div`
  color: white;
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: 10px;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
 

  svg {
    inline-size: 40px;
    block-size: 40px;
    circle {
      fill: #fff;
      stroke: none;
    }
    path {
      stroke: #3877EE;
    }
  }
  ${mediaQueries('md', 'max')`
        display: none;
    `}
 
`;

export const PaginationContainer = styled.div`
    position: absolute;
    inset-block-end: 40px;
    inline-size: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
    ${mediaQueries('md', 'min')`
        display: none;
    `}
`;

export const PaginationDot = styled.span<{ isActive: boolean }>`
    inline-size: 6px;
    block-size: 6px;
    border-radius: 50%;
    background-color: #42567A;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.4)};
    cursor: pointer;
`;