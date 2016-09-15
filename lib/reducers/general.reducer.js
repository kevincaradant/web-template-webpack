import immutable from 'immutable';

const initialState = immutable.fromJS({
	isMobileMenuOpen: false
});

export function generalReducer(state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_MOBILE_MENU':
			return state
				.setIn(['isMobileMenuOpen'], !state.getIn(['isMobileMenuOpen']));

		case 'OPEN_MOBILE_MENU':
			return state
				.setIn(['isMobileMenuOpen'], true);

		case 'SET_LANG':
		case 'CLOSE_MOBILE_MENU':
			return state
				.setIn(['isMobileMenuOpen'], false);

		default:
			return state;
	}
}
