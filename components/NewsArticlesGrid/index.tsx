import { Col, Row } from 'react-bootstrap';
import { NewsArticaleEntry } from '../NewsArticleEntry';
import { INewArticale } from '@/types';

interface NewsArticlesGridProps {
	articles: INewArticale[];
}

export const NewsArticlesGrid = ({ articles }: NewsArticlesGridProps) => {
	return (
		<Row xs={1} sm={2} xl={3} className="g-4">
			{articles.map(article => (
				<Col key={article.url}>
					<NewsArticaleEntry article={article} />
				</Col>
			))}
		</Row>
	);
};
