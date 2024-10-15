import { FC, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
    Section,
    Wrapper,
    CircleWrapper,
    CircleWr,
    SwiperNavigation,
    SwiperStyled,
    SwiperCounter,
    CurrentSlide,
    Divider,
    TotalSlides,
    SwiperNavigationWrapper,
    MaxDate,
    MinDate,
} from './styled';
import Title from '../ui/Title';

import { BACKWARD, FORWARD, initialStateSlider } from '@src/vars';
import { getMinMaxDates } from '@src/helpers';

import CircleItem from '../Icons/Circle/CircleItem';
import { Dates, Direction, SilderItem, TSwiper } from '@src/types';
import NavSliderCircleBtn from '../ui/NavSliderCircleBtn';
import { IconNavCircleNext, IconNavCirclePrev } from '../Icons';
import { Swiper as SwiperType } from 'swiper';
import SliderYears from '../SliderYears';

const Home: FC = () => {

    const svgRef = useRef<SVGSVGElement | null>(null)
    const sliderContainerRef = useRef<HTMLDivElement | null>(null)
    const swiperRef = useRef<TSwiper>()

    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1)
    const [circlesData, setCirclesData] = useState(initialStateSlider)
    const [sliderItems, setSliderItems] = useState<SilderItem[]>(
        initialStateSlider.find((item) => item.isSelected)?.items || []
    );
    const [dates, setDates] = useState<Dates>(getMinMaxDates(sliderItems))
    const [isAnimating, setIsAnimating] = useState(false)

    const totalSlides = initialStateSlider.length
    const hoverInfoRef1 = useRef<SVGGElement | null>(null)

    const updateMinMaxDates = (index: number) => {

        const selectedCircle = circlesData[index]
        if (selectedCircle) {
            const { minDate, maxDate } = getMinMaxDates(
                selectedCircle.items as SilderItem[]
            );
            gsap.to(dates, {
                minDate,
                maxDate,
                duration: 1,
                onUpdate: () => {
                    setDates({
                        minDate: Math.round(dates.minDate as number),
                        maxDate: Math.round(dates.maxDate as number),
                    });
                },
            });
        }
    };

    const calculateRotation = (direction: string, targetIndex?: number) => {

        const anglePerCircle = 360 / totalSlides

        const currentIndex =
            targetIndex === undefined
                ? swiperRef.current?.activeIndex || 0
                : circlesData.findIndex((circle) => circle.isSelected)

        const rotationSteps =
            targetIndex === undefined
                ? direction === FORWARD
                    ? 1
                    : -1
                : targetIndex - currentIndex

        return rotationSteps * anglePerCircle
    };

    const handleSlideChange = (swiper: SwiperType) => {

        const newIndex = swiper.realIndex
        const direction =
            swiper.activeIndex > swiper.previousIndex ? FORWARD : BACKWARD

        updateMinMaxDates(newIndex)
        const rotationAngle = calculateRotation(direction)

        rotateToTarget(rotationAngle, newIndex)
    };

    const rotateToTarget = (rotationAngle: number, targetId: number) => {

        gsap.to(sliderContainerRef.current, { opacity: 0, duration: 0.5 })
        setIsAnimating(true)

        gsap.to(svgRef.current, {
            rotation: `+=${rotationAngle}`,
            duration: 1,
            transformOrigin: '50% 50%',
            onUpdate: () => {
                setCirclesData((prevData) =>
                    prevData.map((circle) => ({
                        ...circle,
                        r: 3,
                        isSelected: false,
                    }))
                );
                if (hoverInfoRef1.current) {

                    setTimeout(() => {

                        const cx = circlesData[targetId].cx;
                        const cy = circlesData[targetId].cy;

                        gsap.set(hoverInfoRef1.current, {
                            attr: {
                                transform: `rotate(${-(360 / totalSlides) * targetId}, ${cx}, ${cy})`
                            },
                        });
                    }, 100)
                }
            },
            onComplete: () => {
                setIsAnimating(false)

                setCirclesData((prevData) =>
                    prevData.map((circle, index) => ({
                        ...circle,
                        r: index === targetId ? 28 : 3,
                        isSelected: index === targetId,
                    }))
                );

                setSliderItems(circlesData[targetId].items)

                gsap.to(sliderContainerRef.current, {
                    opacity: 1,
                    duration: 0.5,
                });

            },
        });
    };

    const handleNavigation = (direction: Direction) => {

        if (swiperRef.current) {
            const newIndex =
                direction === Direction.next
                    ? swiperRef.current.activeIndex + 1
                    : swiperRef.current.activeIndex - 1;

            swiperRef.current.slideTo(newIndex)
            handleSlideChange(swiperRef.current)
            setCurrentSlideIndex(
                (prev) => prev + (direction === Direction.next ? 1 : -1)
            )
        }

    }

    const handleCircleClick = (index: number) => {
        if (swiperRef.current) {

            const slideTo = index
            swiperRef.current.slideTo(slideTo - 1)

            setCurrentSlideIndex(slideTo)
            updateMinMaxDates(slideTo - 1)

            const rotationAngle = calculateRotation(FORWARD, slideTo - 1)

            rotateToTarget(rotationAngle, slideTo - 1)
        }
    };

    return (
        <>
            <Section>
                <Wrapper>
                    <Title
                        title={
                            <>
                                Исторические <br /> даты
                            </>
                        }
                        type={'h1'}
                    ></Title>

                    <CircleWrapper>
                        <SwiperStyled
                            onSwiper={(swiper) =>
                                (swiperRef.current = swiper as TSwiper)
                            }
                            slidesPerView={1}
                            loop={false}
                            autoplay={false}
                        >
                            <MinDate>{dates.minDate}</MinDate>
                            <CircleWr>
                                <svg
                                    ref={svgRef}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="536"
                                    height="530"
                                    fill="none"
                                    style={{ overflow: 'unset' }}
                                >
                                    <circle
                                        opacity=".2"
                                        cx="268"
                                        cy="265"
                                        r="264.5"
                                        stroke="#42567A"
                                    ></circle>

                                    {circlesData.map((circle, index) => (
                                        <CircleItem
                                            circle={circle}
                                            onClick={handleCircleClick}
                                            key={circle.id}
                                            index={index + 1}
                                            onRef={(ref) => {
                                                if (ref) {
                                                    hoverInfoRef1.current = ref;
                                                }
                                            }}
                                            isRotating={isAnimating}
                                        />
                                    ))}
                                </svg>
                            </CircleWr>

                            <MaxDate>{dates.maxDate}</MaxDate>
                        </SwiperStyled>

                        <SwiperNavigation>
                            <SwiperCounter>
                                <CurrentSlide>
                                    {String(currentSlideIndex).padStart(2, '0')}
                                </CurrentSlide>
                                <Divider>/</Divider>
                                <TotalSlides>
                                    {String(totalSlides).padStart(2, '0')}
                                </TotalSlides>
                            </SwiperCounter>
                            <SwiperNavigationWrapper>
                                <NavSliderCircleBtn
                                    onClick={() =>
                                        handleNavigation(Direction.prev)
                                    }
                                    isDisabled={
                                        isAnimating || currentSlideIndex === 1
                                    }
                                >
                                    <IconNavCirclePrev />
                                </NavSliderCircleBtn>
                                <NavSliderCircleBtn
                                    onClick={() =>
                                        handleNavigation(Direction.next)
                                    }
                                    isDisabled={
                                        isAnimating ||
                                        currentSlideIndex === totalSlides
                                    }
                                >
                                    <IconNavCircleNext />
                                </NavSliderCircleBtn>
                            </SwiperNavigationWrapper>
                        </SwiperNavigation>
                    </CircleWrapper>
                </Wrapper>
                {sliderItems && (
                    <SliderYears
                        items={sliderItems}
                        onRef={(ref) => {
                            if (ref) {
                                sliderContainerRef.current = ref;
                            }
                        }}
                    />
                )}
            </Section>
        </>
    );
};
export default Home;
