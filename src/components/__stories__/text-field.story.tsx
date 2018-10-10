import React from 'react';
import { storiesOf } from '@storybook/react';

import TextField from '../text-field';

storiesOf('TextField', module).add('default', () => (
    <TextField label="First name"/>
)).add('disabled', () => (
    <TextField label="First name" isDisabled/>
)).add('invalid', () => (
    <TextField label="First name" validate={() => true}/>
));
