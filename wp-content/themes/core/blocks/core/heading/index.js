/**
 * Scripts specific to this block
 */

import './style.pcss';
import store from '../../../assets/js/state/store';

const { getState } = store;

console.log( getState() );
