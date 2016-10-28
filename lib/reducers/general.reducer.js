import immutable from 'immutable';

////////////////
// Constantes //
////////////////

const initialState = immutable.fromJS({
	isMobileMenuOpen: false
});

const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';
const OPEN_MOBILE_MENU = 'OPEN_MOBILE_MENU';
const SET_LANG = 'SET_LANG';
const CLOSE_MOBILE_MENU = 'CLOSE_MOBILE_MENU';


///////////////
// Reducers  //
///////////////

export function generalReducer(state = initialState, {type, payload}) {
	switch (type) {
		case TOGGLE_MOBILE_MENU:
			return payload || state
				.setIn(['isMobileMenuOpen'], !state.getIn(['isMobileMenuOpen']));

		case OPEN_MOBILE_MENU:
			return payload || state
				.setIn(['isMobileMenuOpen'], true);

		case SET_LANG:
		case CLOSE_MOBILE_MENU:
			return payload || state
				.setIn(['isMobileMenuOpen'], false);

		default:
			return state;
	}
}
