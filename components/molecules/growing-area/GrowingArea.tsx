import { FunctionComponent } from 'react';
import { Area } from '../../../types/growing-area-types';
import GridSpace from '../../atoms/grid-space/GridSpace';

interface GrowingAreaProps {
	areas: Area[];
	totalArea: { length: number; width: number };
}

const GrowingArea: FunctionComponent<GrowingAreaProps> = ({
	areas,
	totalArea: { length, width },
}) => {
	const rows = [];
	for (let i = 1; i <= width; i++) {
		rows.push(areas.slice(length * (i - 1), length * i));
	}

	return (
		<div className='border-[0.5px] border-black flex flex-col'>
			{rows.map((col, rowI) => {
				return (
					<div key={rowI} className='flex'>
						{col.map((area, i) => {
							return <GridSpace key={i} colour={area} />;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default GrowingArea;
