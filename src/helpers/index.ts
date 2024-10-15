export const getMinMaxDates = (items: { year: number; id: number }[]) => {
    const years = items.map((item) => item.year);
    return {
        minDate: Math.min(...years),
        maxDate: Math.max(...years),
    };
};

export const getTextWidth = (
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

export const getTitleOffset = (title: string, circleCx: number) => {
    const textWidth = getTextWidth(title);
    const offset = 50;
    const textOffset = textWidth / 2;
    return circleCx + offset + textOffset;
};
