import { appState } from './app-state';
import { action } from './action';
import { actionType } from './action-type';

export function reducer(currentState: appState, action: action): appState {
    const newState = { ...currentState }; // SPREAD OPERATOR

    switch(action.type) {
        case actionType.getAllCountries:
            newState.countries = action.payLoad;
            break;
    }

    return newState;
}