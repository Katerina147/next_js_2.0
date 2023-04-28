import axios from 'axios';
import Head from 'next/head';
import { NewsArticlesGrid } from '@/components';
import { GetServerSideProps } from 'next';
import { Alert } from 'react-bootstrap';
import { API } from '@/utils';
import { INewArticale } from '@/types';

interface BreakingNewsPageProps {
	newsArticles: INewArticale[];
}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async () => {
	const { data } = await axios.get(`${API.ALL_NEWS}` + `${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
	return {
		props: {
			newsArticles: data.articles,
		},
	};
};

export default function BreakingNewsPage({ newsArticles }: BreakingNewsPageProps) {
	return (
		<>
			<Head>
				<title key="title">Breaking News - NextJS News Apps</title>
			</Head>
			<main>
				<h1>Breaking News</h1>
				<Alert>
					This page uses <strong>getServerSideProps</strong> to fetch data server-side on every request. This allows
					search engines to crawl the page content and <strong>improves SEO</strong>
				</Alert>
				<NewsArticlesGrid articles={newsArticles} />
			</main>
		</>
	);
}
