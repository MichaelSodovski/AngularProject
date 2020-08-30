// JUST LIKE AN INTERFACE

import { actionType } from './action-type';

export interface action {
    type: actionType;
    payLoad?: any; // not always we have a payLoad so we put an elvis to it. 
}