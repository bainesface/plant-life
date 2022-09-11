import GridSpace from './GridSpace';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Pages/GridSpace',
	component: GridSpace,
} as ComponentMeta<typeof GridSpace>;

export const Soil: ComponentStory<typeof GridSpace> = () => (
	<GridSpace colour='soil' />
);

export const Grass: ComponentStory<typeof GridSpace> = () => (
	<GridSpace colour='grass' />
);

export const Paving: ComponentStory<typeof GridSpace> = () => (
	<GridSpace colour='paving' />
);

export const Decking: ComponentStory<typeof GridSpace> = () => (
	<GridSpace colour='decking' />
);
