import { Action } from '@ngrx/store';
import { Details } from './../../../models';

export enum DetailsActionTypes {
    SelectItem = '[Item Detail/Details] Select Item',
    FilterPropertiesDetails = '[Item Detail/Details] Filter Properties Details',
    DetailsLoadSuccess = '[Item Detail/Details] Load Details Success',
    DetailsLoadFailure = '[Item Detail/Details] Load Details Failure'
}

export class SelectItem implements Action {
    readonly type = DetailsActionTypes.SelectItem;

    constructor(public payload: object) {}
  }
export class FilterPropertiesDetails implements Action {
    readonly type = DetailsActionTypes.FilterPropertiesDetails;

    constructor(public payload: any) {}
}

export class DetailsLoadSuccess implements Action {
    readonly type = DetailsActionTypes.DetailsLoadSuccess;

    constructor(public payload: Details[]) {}
}

export class DetailsLoadFailure implements Action {
    readonly type = DetailsActionTypes.DetailsLoadFailure;

    constructor(public payload: any) {}
}

export type DetailsActionsUnion =
    | SelectItem
    | FilterPropertiesDetails
    | DetailsLoadSuccess
    | DetailsLoadFailure;
