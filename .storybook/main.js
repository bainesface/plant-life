module.exports = {
	'stories': [
		'../components/atoms/**/*.stories.@(js|jsx|ts|tsx)',
		'../components/molecules/**/*.stories.@(js|jsx|ts|tsx)',
		'../components/organisms/**/*.stories.@(js|jsx|ts|tsx)',
	],
	'addons': [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-postcss',
	],
	'framework': '@storybook/react',
	'core': {
		'builder': '@storybook/builder-webpack5',
	},
};
