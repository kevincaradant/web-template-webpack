const generalActionsConst = {
	TOGGLE_MOBILE_MENU: 'TOGGLE_MOBILE_MENU',
	OPEN_MOBILE_MENU: 'OPEN_MOBILE_MENU',
	CLOSE_MOBILE_MENU: 'CLOSE_MOBILE_MENU'
};

function GeneralActionsFactory() {
	'ngInject';

	let generalActions = {
		toggleMobileMenu: () => {
			return dispatch => {
				dispatch({
					type: generalActionsConst.TOGGLE_MOBILE_MENU
				});
			};
		},

		openMobileMenu: () => {
			return dispatch => {
				dispatch({
					type: generalActionsConst.OPEN_MOBILE_MENU
				});
			};
		},

		closeMobileMenu: () => {
			return dispatch => {
				dispatch({
					type: generalActionsConst.CLOSE_MOBILE_MENU
				});
			};
		}
	};

	return generalActions;
}

export {generalActionsConst, GeneralActionsFactory};
