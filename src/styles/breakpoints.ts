export const breakpoints = {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1440,
};

export const mediaQueries = (
    key: keyof typeof breakpoints,
    type: 'min' | 'max' = 'min'
) => {
    const breakpointValue = breakpoints[key];
    return (style: TemplateStringsArray | string) =>
        `@media (${type}-width: ${breakpointValue}px) { ${style} }`;
};
