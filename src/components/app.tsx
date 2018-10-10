import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { GameState, GameStateProvider } from '../fsm';
import { CharacterRules, SpecialRules } from '../rules';

import MainMenuScreen from './main-menu-screen';
import PlayersScreen from './players-screen';

const AppHeader = styled.header``;

const AppFooter = styled.footer``;

type State = {
    characterRules: CharacterRules,
    gameState: GameState,
    players: string[],
    specialRules: SpecialRules,
};

export default class App extends PureComponent<{}, State> {
    state: State = {
        characterRules: {},
        gameState: 'mainMenu',
        players: [],
        specialRules: {},
    };

    render() {
        const { gameState } = this.state;
        return (
            <GameStateProvider value={gameState}>
                <AppHeader>TCW</AppHeader>
                {this._renderScreen()}
                <AppFooter>Footer</AppFooter>
            </GameStateProvider>
        );
    }

    private _renderScreen() {
        const { gameState } = this.state;

        switch (gameState) {
            case 'mainMenu':
                return (
                    <MainMenuScreen startNewGame={this._handleStartNewGame}/>
                );
            case 'players':
                return (
                    <PlayersScreen configureRules={this._handleConfigureRules}/>
                );
        }
    }

    private _handleStartNewGame = () => {
        this.setState({
            gameState: 'players',
        });
    }

    private _handleConfigureRules = () => {
        this.setState({
            gameState: 'ruleConfiguration',
        });
    }
}