import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [display, setDisplay] = useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': display.fontFamilyOption.value,
					'--font-size': display.fontSizeOption.value,
					'--font-color': display.fontColor.value,
					'--container-width': display.contentWidth.value,
					'--bg-color': display.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm display={display} setDisplay={setDisplay} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
