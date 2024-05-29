/**
 * @module
 * @exports viewportDims
 * @description Sets viewport dimensions on shared state
 * and detects mobile or desktop state.
 */

import store from '../state/store.js';
import { MOBILE_BREAKPOINT } from '../config/options';

const viewportDims = () => {
	const { getState, setState } = store;

	const state = getState();
	setState( {
		viewportHeight: window.innerHeight,
		viewportWidth: window.innerWidth,
	} );

	if ( state.viewportWidth >= MOBILE_BREAKPOINT ) {
		setState( { isDesktop: true } );
	} else {
		setState( { isDesktop: false } );
	}
};

export default viewportDims;
