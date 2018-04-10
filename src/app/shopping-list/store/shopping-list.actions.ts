import { Action } from '@ngrx/store';


import { Design } from '../../shared/design.model';


export const ADD_DESIGN = 'ADD_DESIGN';
export const ADD_DESIGNS = 'ADD_DESIGNS';
export const UPDATE_DESIGN = 'UPDATE_DESIGN';
export const DELETE_DESIGN = 'DELETE_DESIGN';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddDesign implements Action{
    readonly type = ADD_DESIGN;
   
    constructor(public payload: Design){}
}

export class AddDesigns implements Action{
    readonly type = ADD_DESIGNS;
   
    constructor(public payload: Design[]){}
}

export class UpdateDesign implements Action{
    readonly type = UPDATE_DESIGN;
   
    constructor(public payload: {design: Design}){}
}

export class DeleteDesign implements Action{
    readonly type = DELETE_DESIGN;
}

export class StartEdit implements Action{
    readonly type = START_EDIT;
   
    constructor(public payload: number){}
}

export class StopEdit implements Action{
    readonly type = STOP_EDIT;
   
   
}


export type ShoppingListActions =
 AddDesign | AddDesigns
  | UpdateDesign | DeleteDesign 
  | StartEdit | StopEdit;