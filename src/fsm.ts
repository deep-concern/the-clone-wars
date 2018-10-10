import { createContext } from 'react';

export type GameState = 'gameOver'
    | 'mainMenu'
    | 'missionSelect'
    | 'nightPhase'
    | 'players'
    | 'performMission'
    | 'ruleConfiguration'
    | 'viewMissionResult';

export const {
    Consumer: GameStateConsumer,
    Provider: GameStateProvider,
} = createContext<GameState>('mainMenu');
