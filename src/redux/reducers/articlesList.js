import { ARTICLES_LIST_COMPLETE } from '../actions/articles';

export default function (state = [], action) {
	if (action.type == ARTICLES_LIST_COMPLETE) {
		return action.articles;
	}
	return state;
}
