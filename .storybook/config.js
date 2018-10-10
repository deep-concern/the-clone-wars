import { configure } from '@storybook/react';

const loadStories = () =>  {
    const req = require.context('../src', true, /__stories__\/.*\.story\.(js|ts)x?$/);

    req.keys().map(req);
};

configure(loadStories, module);
