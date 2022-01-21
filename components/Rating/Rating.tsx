import { useEffect, useState } from 'react';
import cn from 'classnames';

import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

import styles from './Rating.module.css';

const Rating = ({ rating, isEditable, setRating, ...props }: RatingProps) => {
	const [ratingArray, setRaringArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedRatingArray = ratingArray.map((r, index) => (
			<StarIcon
				className={cn(styles.star, {
					[styles.filled]: index < currentRating,
				})}
			/>
		));
		setRaringArray(updatedRatingArray);
	};

	return (
		<div {...props}>
			{ratingArray.map((star, id) => (
				<span key={id}>{star}</span>
			))}
		</div>
	);
};

export default Rating;
