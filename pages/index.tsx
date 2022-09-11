import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import GridSpace from '../components/atoms/grid-space/GridSpace';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className='border-black border-2'>
			<div>Hellloooo</div>
			<GridSpace colour='grass' />
		</div>
	);
};

export default Home;
