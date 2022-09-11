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
		rows.push(i);
	}

	return (
		<div className='border-[0.5px] border-black flex flex-col'>
			{rows.map((col, rowI) => {
				console.log(col);
				return (
					<div className='flex' key={rowI}>
						{areas.map((area, areaI) => {
							console.log(area, 'in grid area');
							console.log(areaI, 'area index', col);
							console.log(length * col, 'lenght * rowi');

							return <GridSpace key={areaI} colour={area} />;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default GrowingArea;
