import { NEXT_SLIDE, PREV_SLIDE } from '@src/vars';
import type Swiper from 'swiper';
export type Silder = {
    id: number;
    cx: number;
    cy: number;
    r: number;
    title: string;
    isSelected: boolean;
    items: SilderItem[];
};

export type SilderItem = {
    id: number;
    title?: string;
    year: number;
    description?: string;
};

export type TSwiper = Swiper & {
    slides: {
        swiperSlideSize: number;
    }[];
};

export type Dates = {
    minDate: number | null;
    maxDate: number | null;
};

export enum Direction {
    next = NEXT_SLIDE,
    prev = PREV_SLIDE,
}
