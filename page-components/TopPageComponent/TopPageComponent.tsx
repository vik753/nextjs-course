import { TopPageComponentProps } from './TopPAgeComponent.props';

export const TopPageComponent = ({
	page,
	products,
	firstCategory,
}: TopPageComponentProps): JSX.Element => {
	return <>{products && products.length}</>;
};
