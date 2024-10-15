import styled from 'styled-components';

export const ButtonStyled = styled.button<{ disabled?: boolean }>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

    &:hover {
        opacity: ${({ disabled }) => (disabled ? 0.5 : 0.8)};
    }
`;
