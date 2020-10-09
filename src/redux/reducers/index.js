import { combineReducers } from 'redux';
// import { reducer as form } from 'redux-form';

// On importe les sous-reducers
// import housingList from './housingList';
import articlesList from './articlesList';
// import searchForm from './searchForm';

// Combine reducers prend en paramètre un objet
// dont les clés représentent les propriétés du state
// et les valeur les sous-reducers qui s'en occupent
export default combineReducers({
	// housingList,
	articlesList,
	// searchForm,
	// form,
});
