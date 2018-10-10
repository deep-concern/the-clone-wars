import React from 'react';
import { storiesOf } from '@storybook/react';

import Screen from '../screen';

storiesOf('Screen', module).add('default', () => (
    <Screen title="Test Screen">Test Content</Screen>
));
