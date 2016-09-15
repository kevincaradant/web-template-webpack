class HelloComponent {
	static component() {
		return {
			template: 'Hello component, your text is : "{{$ctrl.text}}"',
			bindings: {
				text: '<'
			}
		};
	}
}

export default HelloComponent.component();
