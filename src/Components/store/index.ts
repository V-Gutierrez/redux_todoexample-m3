import { createStore } from 'redux';

const INITIAL_STATE = {
    data: ['ReactJS', 'Redux in TS'],
};

function courses(state = INITIAL_STATE, action: any) {
    //ISSO AQUI É O REDUCER
    switch (action.type) {
        case 'ADD_COURSE':
            return { ...state, data: [...state.data, action.title] };
        default:
            return state;
    }
}

const store = createStore(courses);

export default store;
