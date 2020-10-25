module.exports = [

	{
		description: 'classes with arrow expression',
		options: { transforms: { classes: false } },

		input: `
			class Foo extends Bar {
				constructor() {
					super();
					() => {
						this.aa = 1;
					}
				}
			}
		`,

		output: `
			class Foo extends Bar {
				constructor() {
					super();
					var this$1 = this;

					!function() {
						this$1.aa = 1;
					}
				}
			}
		`
	},
];
