import {langActionsConst} from '../actions/lang.actions';

export function langReducer(lang = 'fr', action) {
	switch (action.type) {
		case langActionsConst.SET_LANG:
			return `${action.payload}`;
		default:
			return 'fr';
	}
}
