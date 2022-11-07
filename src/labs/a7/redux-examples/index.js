import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";   // import the component that consumes the data
import hello from "./reducers/hello";   // import reducer that calculates/generates the data
import todos from "./reducers/todos-reducer"; // import the new reducer
// import {createStore} from "redux";  // import createStore to store data from reducers
import {Provider} from "react-redux";   // import Provider which will deliver the data
import { configureStore } from '@reduxjs/toolkit'; // import the configureStore function
import Todos from "./todos-component";  // import new component to render todos

const store = configureStore({  // combine all reducers into a single store
    reducer: {hello, todos}            // each available through these namespaces
});


// const store = createStore(hello);   // create data storage


const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};

export default ReduxExamples;
