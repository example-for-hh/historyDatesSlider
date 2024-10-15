import { Silder } from '@src/types';

export const FORWARD = 'forward';
export const BACKWARD = 'backward';
export const NEXT_SLIDE = 'next';
export const PREV_SLIDE = 'prev';



export const initialStateSlider: Silder[] = [
    {
        id: 1,
        cx: 376,
        cy: 28,
        r: 28,
        title: 'Игры',
        isSelected: true,
        items: [
            {
                id: 8,
                title: 'The Last of Us Part II - Постапокалиптическая игра о мести и утрате',
                year: 2020,
            },
            {
                id: 1,
                title: 'Grand Theft Auto V - Огромный открытый мир Лос-Сантоса',
                year: 2013,
            },
            {
                id: 2,
                title: 'Dragon Age: Inquisition - RPG, спасение мира от катастрофы',
                year: 2014,
            },
            {
                id: 3,
                title: 'The Witcher 3: Wild Hunt - Приключенческая игра с моральными дилеммами',
                year: 2015,
            },
            {
                id: 4,
                title: 'Overwatch - Мультиплеерный шутер с уникальными персонажами',
                year: 2016,
            },
            {
                id: 5,
                title: 'The Legend of Zelda: Breath of the Wild - Игра открытого мира от Nintendo',
                year: 2017,
            },
            {
                id: 6,
                title: 'God of War - Перезапуск классической серии о Кратосе и его сыне',
                year: 2018,
            },
        ],
    },
    {
        id: 2,
        cx: 138,
        cy: 34,
        r: 3,
        title: 'Наука',

        isSelected: false,
        items: [
            {
                id: 11,
                title: 'Частное солнечное затмение в Южной Африке и Антарктиде',
                year: 2015,
            },
            {
                id: 12,
                title: 'Телескоп Хаббл обнаружил самую удалённую галактику',
                year: 2016,
            },
            {
                id: 13,
                title: 'Tesla представила электрический грузовик Tesla Semi',
                year: 2017,
            },
            {
                id: 14,
                title: 'SpaceX успешно посадила ракету Falcon 9 после доставки полезной нагрузки',
                year: 2017,
            },
            {
                id: 15,
                title: 'Запуск телескопа Джеймса Уэбба - крупнейшего и мощнейшего в истории',
                year: 2021,
            },
            {
                id: 16,
                title: 'Фиксация гравитационной волны - важнейшее открытие в физике',
                year: 2015,
            },
        ],
    },
    {
        id: 3,
        cx: 3,
        cy: 265,
        r: 3,
        title: 'Литература',

        isSelected: false,
        items: [
            {
                id: 17,
                title: 'Роман "Анна Каренина" Льва Толстого - великое произведение',
                year: 1877,
            },
            {
                id: 18,
                title: 'Публикация "1984" Джорджа Оруэлла - антиутопия о тоталитаризме',
                year: 1949,
            },
            {
                id: 19,
                title: 'Роман Рэя Брэдбери "451 градус по Фаренгейту" - классическая антиутопия',
                year: 1953,
            },
            {
                id: 20,
                title: 'Публикация "Гарри Поттер и философский камень" Джоан Роулинг',
                year: 1997,
            },
            {
                id: 21,
                title: 'Маргарет Этвуд получает премию "Ман Букер" за роман "Слепой убийца"',
                year: 2000,
            },
            {
                id: 22,
                title: 'Нобелевская премия по литературе Светлане Алексиевич за документальные произведения',
                year: 2015,
            },
        ],
    },
    {
        id: 4,
        cx: 126,
        cy: 489,
        r: 3,
        title: 'История',
        isSelected: false,
        items: [
            {
                id: 23,
                title: 'Падение Римской империи - свержение Ромула Августула (476)',
                year: 476,
            },
            {
                id: 24,
                title: 'Подписание Декларации независимости США (1776)',
                year: 1776,
            },
            {
                id: 25,
                title: 'Начало Второй мировой войны - вторжение Германии в Польшу (1939)',
                year: 1939,
            },
            {
                id: 26,
                title: 'Высадка на Луну - Нил Армстронг (1969)',
                year: 1969,
            },
            {
                id: 27,
                title: 'Падение Берлинской стены - конец Холодной войны (1989)',
                year: 1989,
            },
            {
                id: 28,
                title: 'Октябрьская революция в России (1917)',
                year: 1917,
            },
        ],
    },
    {
        id: 5,
        cx: 402,
        cy: 492,
        r: 3,
        title: 'Кино',
        isSelected: false,
        items: [
            {
                id: 29,
                title: 'Фильм "Крестный отец" - классика мирового кино',
                year: 1972,
            },
            {
                id: 30,
                title: '"Звёздные войны: Эпизод IV - Новая надежда" - начало франшизы',
                year: 1977,
            },
            {
                id: 31,
                title: '"Матрица" - революция в жанре научной фантастики',
                year: 1999,
            },
            {
                id: 32,
                title: 'Фильм "Титаник" - мировая касса и премии Оскар',
                year: 1997,
            },
            {
                id: 33,
                title: 'Премьера "Интерстеллара" - научная точность и визуальные эффекты',
                year: 2014,
            },
            {
                id: 34,
                title: 'Фильм "Зелёная книга" - победитель Оскара',
                year: 2019,
            },
        ],
    },
    {
        id: 6,
        cx: 533,
        cy: 265,
        r: 3,
        title: 'Сериалы',
        isSelected: false,
        items: [
            {
                id: 35,
                title: '"Остаться в живых" - Сериал о выживших после крушения самолета на загадочном острове',
                year: 2004,
            },
            {
                id: 36,
                title: '"Во все тяжкие" - История учителя химии, ставшего производителем метамфетамина',
                year: 2008,
            },
            {
                id: 37,
                title: 'Сериал "Игра престолов" - История правления королевы Елизаветы II и личные драмы британской монархии',
                year: 2011,
            },
            {
                id: 38,
                title: '"Очень странные дела" - Дети сталкиваются с паранормальными явлениями в маленьком городке',
                year: 2016,
            },
            {
                id: 39,
                title: 'Сериал "Чернобыль" - Драма о катастрофе на Чернобыльской атомной станции и её последствиях',
                year: 2019,
            },
            {
                id: 40,
                title: 'Сериал "Корона" - История правления королевы Елизаветы II и личные драмы британской монархии',
                year: 2016,
            },
        ],
    },
];
