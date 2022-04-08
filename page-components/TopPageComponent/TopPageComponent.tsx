import { TopPageComponentProps } from './TopPAgeComponent.props';
import Htag from '../../components/Htag/Htag';
import Tag from '../../components/Tag/Tag';
import styles from './TopPageComponent.module.css';
import Card from '../../components/Card/Card';
import HhData from '../../components/HhData/HhData';

export const TopPageComponent = ({
	page,
	products,
	firstCategory,
}: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && (
					<Tag color='grey' size='m'>
						{products.length}
					</Tag>
				)}
				<span>Sorting component</span>
			</div>
			<div>{products && products.map((p) => <p key={p._id}>{p.title}</p>)}</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>
					hh.ru
				</Tag>
			</div>
			<HhData {...page.hh} />
		</div>
	);
};
