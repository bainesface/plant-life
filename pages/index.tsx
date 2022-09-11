import type { NextPage } from 'next';

import GridSpace from '../components/atoms/grid-space/GridSpace';

const Home: NextPage = () => {
	return (
		<div className='border-black border-2'>
			<div>Hellloooo</div>
			<GridSpace colour='grass' />
		</div>
	);
};

export default Home;
