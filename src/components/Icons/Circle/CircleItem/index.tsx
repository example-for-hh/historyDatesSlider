import { FC, useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Silder } from '@src/types';
import { getTitleOffset } from '@src/helpers';

type CircleItemProps = {
    circle: Omit<Silder, 'items'>;
    onClick?: (index: number) => void;
    index: number;
    isRotating: boolean;
    onRef?: (ref: SVGGElement | null) => void;
};

const CircleItem: FC<CircleItemProps> = ({
    circle,
    index,
    isRotating,
    onClick,
    onRef,
}) => {
    const { isSelected, r, title, cx, cy } = circle;
    const [hovered, setHovered] = useState(false);
    const hoverInfoRef = useRef<SVGGElement | null>(null);

    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const hoverInfoRef1 = useRef<SVGGElement | null>(null);


    useEffect(() => {
        if (onRef && hoverInfoRef1.current) {
            onRef(hoverInfoRef1.current)
        }
    }, [onRef, hoverInfoRef1]);

    useEffect(() => {
        if (hoverInfoRef.current && !tlRef.current) {
            const tl = gsap.timeline({ paused: true });
            tl.fromTo(
                hoverInfoRef.current,
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
            tlRef.current = tl;
        }
    }, []);

    const handleMouseEnter = () => {
        if (isSelected || isRotating) return;
        setHovered(true);
        tlRef.current?.play();
    };

    const handleClick = (index: number) => {
        handleMouseLeave();
        onClick && onClick(index);
    };
    const handleMouseLeave = () => {
        if (isSelected || isRotating) return;
        tlRef.current
            ?.reverse()
            .eventCallback('onReverseComplete', () => setHovered(false));
    };

    return (
        <g onClick={() => handleClick(index)}>
            <circle
                cx={cx}
                cy={cy}
                r={isSelected ? 28 : r}
                fill={isSelected ? '#F4F5F9' : '#42567A'}
                onMouseEnter={handleMouseEnter}
                style={{ cursor: 'pointer' }}
            ></circle>

            {isSelected && (
                <g ref={hoverInfoRef1}>
                    <>
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
                        >
                            {index}
                        </text>
                        <text
                            x={getTitleOffset(title, cx)}
                            y={cy}
                            fontSize="16"
                            fill="#303E58"
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {title}
                        </text>
                    </>
                </g>
            )}

            <g
                ref={hoverInfoRef}
                style={{
                    visibility: hovered && !isSelected ? 'visible' : 'hidden',
                    cursor: 'pointer',
                }}
                onMouseLeave={handleMouseLeave}
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
                >
                    {index}
                </text>
            </g>
        </g>
    );
};

export default CircleItem;
