import React, { PureComponent } from 'react';
import styled from 'styled-components';

const JumbotronScreenBody = styled.main`
    margin: auto;

    // default size
    width: 960px;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

const JumbotronScreenTitle = styled.main`
    text-align: center;
    border-bottom: 1px solid #cccccc;


    // default size
    font-size: 30px;
    padding: 100px 0;

    @media (max-width: 700px) {
        font-size: 2rem;
        padding: 2rem 0;
    }
`;

export type Props = {
    title: string,
};

export default class JumbotronScreen extends PureComponent<Props> {
    render () {
        const { children, title } = this.props;

        return (
            <JumbotronScreenBody>
                <JumbotronScreenTitle>{title}</JumbotronScreenTitle>
                {children}
            </JumbotronScreenBody>
        );
    }
}
