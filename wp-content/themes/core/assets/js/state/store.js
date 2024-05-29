import { createStore } from 'zustand/vanilla';
import viewportStore from './viewport';

export const store = createStore( ( ...a ) => {
	return {
		...viewportStore( ...a ),
	};
} );

export default store;
