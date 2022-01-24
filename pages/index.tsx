import type { NextPage } from 'next';

import Htag from '../components/Htag/Htag';
import Button from '../components/Button/Button';
import Ptag from '../components/Ptag/Ptag';
import Tag from '../components/Tag/Tag';
import Rating from '../components/Rating/Rating';
import { useState } from 'react';
import { withLayout } from '../Layout/Layout';

const Home: NextPage = () => {
	const [rating, setRating] = useState<number>(4);
	const [rating2, setRating2] = useState<number>(2);

	return (
		<>
			<Htag tag='h1'>Hello Dolly</Htag>
			<Button appearance='primary' arrow='right'>
				Click me
			</Button>
			<Button appearance='ghost' arrow='down'>
				Click me
			</Button>
			<Ptag size='h'>Some text</Ptag>
			<Ptag size='m'>Some text</Ptag>
			<Ptag size='s'>Some text</Ptag>
			<Ptag>Some text</Ptag>
			<Tag>Ghost small</Tag>
			<Tag size='m' color='red'>
				Red m
			</Tag>
			<Tag size='s' color='green'>
				Green s
			</Tag>
			<Tag color='primary'>Primary</Tag>
			<Rating rating={rating2} isEditable setRating={setRating2} />
			<Rating rating={rating} isEditable setRating={setRating} />
		</>
	);
};

export default withLayout(Home);
