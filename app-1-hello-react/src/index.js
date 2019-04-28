import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Components  from './Components/1Component1';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Components />, document.getElementById('root'));
serviceWorker.unregister();
