const initialState = {
	isMobileMenuOpen: false
};

export function generalReducer(state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_MOBILE_MENU':
			return Object.assign(
				{},
				state,
				{isMobileMenuOpen: state.isMobileMenuOpen}
			);
		case 'OPEN_MOBILE_MENU':
			return Object.assign(
				{},
				state,
				{isMobileMenuOpen: true}
			);
		case 'SET_LANG':
		case 'CLOSE_MOBILE_MENU':
			return Object.assign(
				{},
				state,
				{isMobileMenuOpen: false}
			);
		default:
			return state;
	}
}
