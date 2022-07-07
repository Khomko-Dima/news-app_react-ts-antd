import { FC, useReducer } from 'react';
import { NewsContext } from './news-context';
import Reducer, { initialStore } from './reducer';

export const NewsStore: FC<{ children: any }> = ({ children }) => {
	const [store, dispatch] = useReducer(Reducer, initialStore);
	console.log('NewsStore', store)
	return (
		<NewsContext.Provider value={{ store, dispatch }}>
			{children}
		</NewsContext.Provider>
	);
};