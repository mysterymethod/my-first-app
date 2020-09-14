//Globally available JavaScript object/array/string anything.

import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}

});

export default authContext;