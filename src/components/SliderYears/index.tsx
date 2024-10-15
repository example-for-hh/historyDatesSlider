import { FC, useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import {
    SliderContainer,
    StyledSwiper,
    SlideItem,
    SlideYear,
    SlideText,
    StyledSwiperButtonPrev,
    StyledSwiperButtonNext,
    PaginationContainer,
    PaginationDot,
} from './styled';

import { IconNavCircleNext, IconNavCirclePrev } from '../Icons';

import { SilderItem, TSwiper } from '@src/types';


type SliderYearsProps = {
    items: SilderItem[];
    onRef?: (ref: HTMLDivElement | null) => void;
};

const SliderYears: FC<SliderYearsProps> = ({ items, onRef }) => {

    const swiperRef = useRef<TSwiper>()
    const [isStart, setIsStart] = useState(true)
    const [isEnd, setIsEnd] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const sliderContainerRef = useRef<HTMLDivElement | null>(null)

    const handleSlideChange = (swiper: SwiperType) => {

        setIsStart(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
        setActiveIndex(swiper.activeIndex)
    };

    useEffect(() => {
        if (onRef && sliderContainerRef.current) {
            onRef(sliderContainerRef.current)
        }
    }, [onRef, sliderContainerRef])

    return (
        <>
            <SliderContainer ref={sliderContainerRef}>
                <StyledSwiper
                    spaceBetween={80}
                    slidesPerView={3}
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) =>
                        (swiperRef.current = swiper as TSwiper)
                    }
                    pagination={{
                        el: '.pagination',
                        clickable: true,
                        type: 'bullets',
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 25,
                        },
                        768: {
                            spaceBetween: 25,
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 80,
                        },
                    }}
                >
                    {items
                        .sort((a, b) => a.year - b.year)
                        .map((item) => (
                            <SwiperSlide key={item.id}>
                                <SlideItem>
                                    <SlideYear>{item.year}</SlideYear>
                                    <SlideText>{item.title}</SlideText>
                                </SlideItem>
                            </SwiperSlide>
                        ))}
                </StyledSwiper>

                {!isStart && (
                    <StyledSwiperButtonPrev onClick={() => swiperRef.current?.slidePrev()}>
                        <IconNavCirclePrev />
                    </StyledSwiperButtonPrev>
                )}
                {!isEnd && (
                    <StyledSwiperButtonNext onClick={() => swiperRef.current?.slideNext()}>
                        <IconNavCircleNext />
                    </StyledSwiperButtonNext>
                )}

                <PaginationContainer className="pagination">
                    {items.map((_, index) => (
                        <PaginationDot
                            key={index}
                            isActive={activeIndex === index}
                            onClick={() => swiperRef.current?.slideTo(index)}
                        />
                    ))}
                </PaginationContainer>
            </SliderContainer>
        </>
    );
};

export default SliderYears;
