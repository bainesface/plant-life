import { FunctionComponent, useState } from 'react';
import { Area } from '../../../types/growing-area-types';

interface GridSpaceProps {
	colour: Area | 'nothing';
}

const GridSpace: FunctionComponent<GridSpaceProps> = ({
	colour = 'nothing',
}) => {
	const [spaceColour, setSpaceColour] = useState<Area | 'nothing'>(colour);

	const colourLookup: {
		[key in Area | 'nothing']: string;
	} = {
		grass: 'bg-lime-500',
		soil: 'bg-yellow-800',
		paving: 'bg-stone-200',
		decking: 'bg-amber-700',
		nothing: 'bg-orange-100',
	};

	return (
		<div
			onClick={() => {
				setSpaceColour((currColour) => {
					return currColour === 'nothing' ? colour : 'nothing';
				});
			}}
			className={`w-[100px] h-[100px] ${colourLookup[spaceColour]} shadow-[inset_0_0_6px_rgba(0,0,0,0.6)]`}></div>
	);
};

export default GridSpace;
