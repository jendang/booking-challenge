import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const loadApplication = () => {
    ReactDOM.render(
        <React.Suspense fallback={<p>Loading</p>}>
            <App />
        </React.Suspense>
        , document.getElementById('app-entry')
    )
}

loadApplication();