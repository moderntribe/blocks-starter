import { createStore } from 'zustand/vanilla';
import viewportStore from './viewport';

export const store = createStore( () => {
	return {
		...viewportStore(),
	};
} );

export default store;
