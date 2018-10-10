import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import MainMenuScreen from '../main-menu-screen';

storiesOf('MainMenuScreen', module).add('default', () => (
    <MainMenuScreen startNewGame={action('clicked')}/>
));
