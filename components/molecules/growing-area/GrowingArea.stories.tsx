import GrowingArea from './GrowingArea';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Area } from '../../../types/growing-area-types';

export default {
	title: 'GrowingArea',
	component: GrowingArea,
} as ComponentMeta<typeof GrowingArea>;

export const SmallContainer: ComponentStory<typeof GrowingArea> = () => {
	const [areas, setAreas] = useState<Area[]>([
		'soil',
		'soil',
		'grass',
		'grass',
		'grass',
		'grass',
	]);

	return <GrowingArea areas={areas} totalArea={{ length: 3, width: 2 }} />;
};

export const MediumContainer: ComponentStory<typeof GrowingArea> = () => {
	const [areas, setAreas] = useState<Area[]>([
		'soil',
		'soil',
		'grass',
		'grass',
		'grass',
		'grass',
		'decking',
		'decking',
		'decking',
		'grass',
		'grass',
		'grass',
	]);

	return <GrowingArea areas={areas} totalArea={{ length: 4, width: 3 }} />;
};
