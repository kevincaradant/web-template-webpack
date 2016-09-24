const langActionsConst = {
	SET_LANG: 'SET_LANG'
};

function LangActionsFactory($translate) {
	'ngInject';

	let langActions = {
		setLang: lang => {
			return dispatch => {
				$translate.use(lang);

				dispatch({
					type: langActionsConst.SET_LANG,
					payload: lang
				});
			};
		}
	};

	return langActions;
}

export {langActionsConst, LangActionsFactory};
