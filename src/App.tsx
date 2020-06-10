import React from 'react';
import GlobalStyle from './Global/global_styles';
import { Provider } from 'react-redux';
import store from './Components/store/index';
import CourseList from './Components/courseList/courselist';

function App() {
    return (
        <>
            <Provider store={store}>
                <CourseList />
                <GlobalStyle />
            </Provider>
        </>
    );
}

export default App;
