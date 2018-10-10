import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from '../button';

storiesOf('Button', module).add('default', () => (
    <Button onClick={action('clicked')}>Test</Button>
)).add('disabled', () => (
    <Button onClick={action('clicked')} isDisabled>Test</Button>
));
