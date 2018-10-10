import React, { ChangeEvent, Component, Fragment } from 'react';
import styled from 'styled-components';

import Button from './button';
import TextField from './text-field';
import Screen from './Screen';

const ControlsInput = styled.div`
    display: flex;
`;

const maxNumberOfPlayers = 10;
const minNumberOfPlayers = 5;

const validatePlayer = (player: string) => player !== '';

export type Props = {
    /**
     * Callback when user is done entering players.
     */
    configureRules: (players: string[]) => void,
};

export type State = {
    numberOfPlayers: number,
    players: string[],
}

export default class PlayersScreen extends Component<Props> {
    state: State = {
        numberOfPlayers: minNumberOfPlayers,
        players: Array(minNumberOfPlayers).fill(''),
    };

    render () {
        const { numberOfPlayers } = this.state;

        return (
            <Screen title="Players">
                {this._renderPlayersField()}
                <ControlsInput>
                    <Button
                        onClick={this._removeField}
                        isDisabled={numberOfPlayers === minNumberOfPlayers}
                    >
                        -
                    </Button>
                    <Button
                        onClick={this._addField}
                        isDisabled={numberOfPlayers === maxNumberOfPlayers}
                    >
                        +
                    </Button>
                </ControlsInput>
                <Button
                    onClick={this._handleConfigureRules}
                    isDisabled={this._validateFields()}
                >
                    Configure Rules
                </Button>
            </Screen>
        );
    }

    private _renderPlayersField() {
        const { players } = this.state;

        const playerFields = players.map(
            (player, i) => (
                <TextField
                    label={`Player ${i + 1}`}
                    value={player}
                    validate={content => content !== ''}
                    key={`player-input-${i}`}
                    onChange={e => this._handleOnPlayerInputChange(i, e)}
                />
            )
        );

        return playerFields;
    }

    private _handleOnPlayerInputChange = (i: number, e: ChangeEvent<HTMLInputElement>) => {
        const { players: oldPlayers } = this.state;

        const players = [...oldPlayers];

        players[i] = e.target.value;

        this.setState({
            players,
        })
    }

    private _removeField() {
        const { numberOfPlayers } = this.state;

        this.setState({
            numberOfPlayers: numberOfPlayers - 1,
        });
    }

    private _addField() {
        const { numberOfPlayers } = this.state;

        this.setState({
            numberOfPlayers: numberOfPlayers + 1,
        });
    }

    private _validateFields() {
        const { players } = this.state;

        return players.reduce(
            (arePlayersValid, currentPlayer) => {
                return !arePlayersValid ? arePlayersValid : validatePlayer(currentPlayer);
            },
            true
        );
    }

    private _handleConfigureRules() {
        const { configureRules } = this.props;
        const { players } = this.state;

        configureRules(players);
    }
}
