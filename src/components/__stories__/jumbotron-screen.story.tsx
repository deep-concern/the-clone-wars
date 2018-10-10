import React from 'react';
import { storiesOf } from '@storybook/react';

import JumbotronScreen from '../jumbotron-screen';

storiesOf('JumbotronScreen', module).add('default', () => (
    <JumbotronScreen title="Test Jumbotron Screen">Test Content</JumbotronScreen>
)); "";
