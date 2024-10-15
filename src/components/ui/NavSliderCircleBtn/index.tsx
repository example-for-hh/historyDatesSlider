import React, { FC } from 'react';
import { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './styled';

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    isDisabled?: boolean;
};

const NavSliderCircleBtn: FC<TButtonProps> = ({
    type = 'button',
    isDisabled,
    children,
    ...attr
}) => {
    return (
        <ButtonStyled {...attr} type={type} disabled={isDisabled}>
            {children}
        </ButtonStyled>
    );
};

export default NavSliderCircleBtn;
