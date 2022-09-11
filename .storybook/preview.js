import '../styles/globals.css';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
	configurable: true,
	value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	darkMode: false,
	backgrounds: {
		default: 'light',
		values: [
			{
				name: 'light',
				value: '#F8F9F9',
			},
			{
				name: 'dark',
				value: '#1A1B27',
			},
		],
	},
	viewport: {
		viewports: {
			mob: {
				name: 'Mobile',
				styles: {
					width: '375px',
					height: '812px',
				},
			},
			sm: {
				name: 'Small (breakpoint 0)',
				styles: {
					width: '640px',
					height: '982px',
				},
			},
			md: {
				name: 'Medium (breakpoint 1)',
				styles: {
					width: '744px',
					height: '982px',
				},
			},
			lg: {
				name: 'Large (breakpoint 2A)',
				styles: {
					width: '1024px',
					height: '982px',
				},
			},
			xl: {
				name: 'XL (breakpoint 2B)',
				styles: {
					width: '1280px',
					height: '982px',
				},
			},
			'2XL': {
				name: '2XL (breakpoint 3)',
				styles: {
					width: '1536px',
					height: '982px',
				},
			},
			'3XL': {
				name: '3XL (breakpoint 4)',
				styles: {
					width: '1728px',
					height: '982px',
				},
			},
		},
	},
	layout: 'centered',
};
