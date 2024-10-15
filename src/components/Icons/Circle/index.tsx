import React, { FC, useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { initialStateSlider } from '@src/vars';
import { Silder, SilderItem } from '@src/types';

const Circle: FC<Silder> = ({ cx, cy, r, title, isSelected, id }) => {
    const [circlesData, setCirclesData] = useState(initialStateSlider);
    const [activeCircle, setActiveCircle] = useState<number>(1); // активный круг
    const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);
    const hoverInfoRefs = useRef<(SVGGElement | null)[]>([]);
    const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]); // Рефы для таймлайнов

    const titleRefs = useRef<(SVGTextElement | null)[]>([]); // Для хранения ссылок на элементы текста

    const handleMouseEnter = (index: number) => {
        if (circlesData[index].isSelected) return;

        setHoveredCircle(index);

        const hoverInfo = hoverInfoRefs.current[index];
        if (hoverInfo && !tlRefs.current[index]) {
            const tl = gsap.timeline({ paused: true });
            tl.fromTo(
                hoverInfo,
                {
                    scale: 0,
                    opacity: 0,
                    fill: '#42567A',
                    transformOrigin: 'center center',
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power1.out',
                    fill: '#F4F5F9',
                }
            );
            tlRefs.current[index] = tl;
        }
        tlRefs.current[index]?.play();
    };

    const handleMouseLeave = (index: number) => {
        if (circlesData[index].isSelected) return;

        tlRefs.current[index]
            ?.reverse()
            .eventCallback('onReverseComplete', () => {
                setHoveredCircle(null);
            });
    };

    // const calculateRotation = (newIndex: number) => {
    //     const activeIndex = activeCircle - 1;
    //     const anglePerCircle = 360 / circlesData.length;
    //     return anglePerCircle * (newIndex - activeIndex);
    // };

    const handleCircleClick = (index: number) => {};

    // const getRotationTransform = (index: number) => {
    //     const anglePerCircle = 360 / circlesData.length;
    //     const rotation = anglePerCircle * index;
    //     return `rotate(${-rotation}, ${circlesData[index].cx}, ${circlesData[index].cy})`;
    // };

    // Функция для получения ширины текста
    const getTextWidth = (
        text: string,
        fontSize: string = '16px',
        fontFamily: string = 'Arial'
    ) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
            context.font = `${fontSize} ${fontFamily}`;
            return context.measureText(text).width;
        }
        return 0;
    };

    // Функция для корректировки смещения текста
    const getTitleOffset = (title: string, circleCx: number) => {
        const textWidth = getTextWidth(title);
        const offset = 50; // Базовое смещение
        const textOffset = textWidth / 2; // Смещение для центрирования текста
        return circleCx + offset + textOffset;
    };

    // Функция для расчета смещения x в зависимости от длины текста
    // const calculateTextX = (index: number) => {

    //     const textElement = titleRefs.current[index];
    //     if (textElement) {
    //         const textWidth = textElement.getComputedTextLength(); // Получаем ширину текста
    //         return circlesData[index].cx + 64 - textWidth / 2; // Смещаем текст влево, чтобы он был по центру
    //     }
    //     return circlesData[index].cx + 64; // В случае ошибки возвращаем дефолтное смещение
    // };

    return (
        <g>
            {!isSelected ? (
                <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill={'#42567A'}
                    onMouseEnter={() => handleMouseEnter(id)}
                    style={{ cursor: 'pointer' }}
                ></circle>
            ) : (
                <g
                    key={`static-${id}`}
                    style={{ cursor: 'default', visibility: 'visible' }}
                >
                    <circle
                        cx={cx}
                        cy={cy}
                        r="28"
                        fill="#F4F5F9"
                        style={{ transition: 'opacity 0.4s ease-in-out' }}
                    ></circle>
                    <circle
                        cx={cx}
                        cy={cy}
                        r="27.5"
                        stroke="#303E58"
                        strokeOpacity=".5"
                    ></circle>
                    <text
                        x={cx}
                        y={cy}
                        fontSize="16"
                        fill="#303E58"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        // transform={getRotationTransform(id)}
                    >
                        {id}
                    </text>
                    <text
                        ref={(el) => (titleRefs.current[id] = el)}
                        x={getTitleOffset(title, cx)}
                        y={cy}
                        fontSize="16"
                        fill="#303E58"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        // transform={getRotationTransform(id)}
                    >
                        {title}
                    </text>
                </g>
            )}

            <g
                ref={(el) => (hoverInfoRefs.current[id] = el)}
                style={{
                    visibility: hoveredCircle === id ? 'visible' : 'hidden',
                    cursor: 'pointer',
                }}
                onClick={() => handleCircleClick(id)}
                onMouseLeave={() => handleMouseLeave(id)}
            >
                <circle cx={cx} cy={cy} r="28" fill="#42567A"></circle>
                <circle
                    cx={cx}
                    cy={cy}
                    r="27.5"
                    stroke="#303E58"
                    strokeOpacity=".5"
                ></circle>
                <text
                    x={cx}
                    y={cy}
                    fontSize="16"
                    fill="#303E58"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    // transform={getRotationTransform(id)}
                >
                    {id}
                </text>
            </g>
        </g>
    );
};

export default Circle;
