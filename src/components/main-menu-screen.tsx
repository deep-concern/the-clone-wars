import React, { PureComponent } from 'react';
import styled from 'styled-components';

import JumbotronScreen from './jumbotron-screen';

const CenteredButton = styled.main`
    display: block;
    margin: auto;
`;

export type Props = {
    startNewGame: () => void,
};

export default class MainMenuScreen extends PureComponent<Props> {
    render () {
        const { startNewGame } = this.props;

        return (
            <JumbotronScreen title="The Clone Wars">
                <CenteredButton onClick={startNewGame}>
                    New Game
                </CenteredButton>
            </JumbotronScreen>
        );
    }
}
