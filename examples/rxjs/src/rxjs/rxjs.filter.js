class RxjsFilter {
	static filter() {
		return input => {
			return input.map(i => {
				i.name = i.name.toUpperCase();
				return i;
			});
		};
	}
}

export default RxjsFilter.filter;
