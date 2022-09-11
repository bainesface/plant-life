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
		grass: 'bg-lime-600',
		soil: 'bg-yellow-900',
		paving: 'bg-stone-300',
		decking: 'bg-amber-800',
		nothing: 'bg-orange-100',
	};

	return (
		<div
			onClick={() => {
				setSpaceColour((currColour) => {
					return currColour === 'nothing' ? colour : 'nothing';
				});
			}}
			className={`w-[100px] h-[100px] ${colourLookup[spaceColour]} border-black border-[0.5px]`}></div>
	);
};

export default GridSpace;
