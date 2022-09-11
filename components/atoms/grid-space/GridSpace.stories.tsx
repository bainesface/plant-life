import GridSpace from './GridSpace';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
	title: 'Pages/GridSpace',
	component: GridSpace,
} as ComponentMeta<typeof GridSpace>;

export const Grass: ComponentStory<typeof GridSpace> = () => (
	<GridSpace colour='grass' />
);
