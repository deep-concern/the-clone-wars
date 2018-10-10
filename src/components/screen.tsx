import React, { PureComponent } from 'react';
import styled from 'styled-components';

const ScreenBody = styled.main`
    margin: auto;

    // default size
    width: 960px;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

const ScreenTitle = styled.main`
    // default size
    font-size: 30px;
    margin-bottom: 20px;
    margin-left: 20px;

    @media (max-width: 700px) {
        font-size: 2rem;
        display: block;
        text-align: center;
        margin-bottom: .5rem;
    }
`;

export type Props = {
    title: string,
};

export default class Screen extends PureComponent<Props> {
    render () {
        const { children, title } = this.props;

        return (
            <ScreenBody>
                <ScreenTitle>{title}</ScreenTitle>
                {children}
            </ScreenBody>
        );
    }
}
