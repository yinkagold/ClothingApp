import * as ShoppingListActions from './shopping-list.actions';

import { Design } from "../../shared/design.model";



export interface State {
    designs: Design[];
    editedDesign: Design;
    editedDesignIndex: number;
}
export const ADD_DESIGN = 'ADD_DESIGN';
const initialState = {
    designs: [
      // new Design('Polo','M',4) 
    ], 
    editedDesign: null,
    editedDesignIndex: -1
};

export function ShoppingListReducer(state=initialState, action: ShoppingListActions.ShoppingListActions){
    switch (action.type){
        case ShoppingListActions.ADD_DESIGN:
        return {
            ...state,
            designs: [...state.designs, action.payload ]
        };
        case ShoppingListActions.ADD_DESIGNS:
        return {
            ...state,
            designs: [...state.designs, ...action.payload]
        }
        case ShoppingListActions.UPDATE_DESIGN:
        const design = state.designs[state.editedDesignIndex];
        const UpdateDesign = {
            ...design,      // this will overwrite the old property of the design 
            ...action.payload.design
        };
        const designs= [...state.designs];
        designs[state.editedDesignIndex] = UpdateDesign;
        return {
            ...state,
            designs: designs,
            editedDesign: null,
            editedDesignIndex: -1
        };
        case ShoppingListActions.DELETE_DESIGN:
        const oldDesigns = [...state.designs];
        oldDesigns.splice(state.editedDesignIndex, 1)
        return{
            ...state,
            designs: oldDesigns
        };
        case ShoppingListActions.START_EDIT:
        const editedDesign = {...state.designs[action.payload]}
        return {
            ...state,
            editedDesign: editedDesign,
            editedDesignIndex: action.payload
        };
        case ShoppingListActions.STOP_EDIT:
        return {
            ...state,
            editedDesign: null,
            editedDesignIndex: -1
        };
        default:
        return state; 
    }
 
}