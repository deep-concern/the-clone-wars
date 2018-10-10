import React, { CSSProperties, PureComponent } from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
    display: inline-block;
    box-sizing: border-box;
    margin: 0 .5rem .5rem 0;
    color: #212529;
    background-color: #f8f9fa;
    border: 1px solid #cccccc;
    text-transform: none;
    cursor: pointer;

    // default size
    padding: .25rem;
    font-size: 1rem;

    @media (max-width: 700px) {
        padding: .5rem .75rem;
        font-size: 1.25rem;
        border-radius: .3rem;
    }
`;

const DisabledButton = styled(DefaultButton)`
    cursor: default;
    color: #b6b6b6;
    background-color: #f2f3f4;
    border-color: #dddddd;
`;

export type Props = {
    className?: string,
    isDisabled?: boolean,
    onClick?: () => void,
    style?: CSSProperties,
};

export default class Button extends PureComponent<Props> {
    render() {
        const { children, className, isDisabled, onClick, style } = this.props;

        const StyledButton = isDisabled ? DisabledButton : DefaultButton;

        return (
            <StyledButton
                className={className}
                disabled={isDisabled}
                onClick={onClick}
                style={style}
            >
                {children}
            </StyledButton>
        )
    }
}
