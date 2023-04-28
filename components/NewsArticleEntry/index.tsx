import { INewArticale } from '@/types';
import { Card } from 'react-bootstrap';

interface NewsArticaleEntryProps {
	article: INewArticale;
}

export const NewsArticaleEntry = ({ article }: NewsArticaleEntryProps) => {
	const { title, description, url, urlToImage } = article;

	const validImageUrl =
		urlToImage?.startsWith('http://') || urlToImage?.startsWith('https://') ? urlToImage : undefined;

	return (
		<a href={url}>
			<Card className="h-100">
				<Card.Img variant="top" src={validImageUrl} />
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>
			</Card>
		</a>
	);
};
