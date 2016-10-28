import {langActionsConst} from '../actions/lang.actions';

export function langReducer(lang = 'fr', {type, payload}) {
	switch (type) {
		case langActionsConst.SET_LANG:
			return payload || type;
		default:
			return 'fr';
	}
}
