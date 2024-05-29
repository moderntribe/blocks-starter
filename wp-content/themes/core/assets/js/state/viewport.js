export const viewportStore = ( set ) => ( {
	/**
	 * Viewport Height
	 */
	viewportHeight: window.innerHeight,
	setViewportHeight: () =>
		set( () => ( { viewportHeight: window.innerHeight } ) ),
	/**
	 * Viewport Width
	 */
	viewportWidth: window.innerWidth,
	setViewportWidth: () =>
		set( () => ( { viewportWidth: window.innerWidth } ) ),
	/**
	 * Device Type
	 */
	isDesktop: false,
	setDesktopMode: () => set( () => ( { isDesktop: true } ) ),
	setMobileMode: () => set( () => ( { isDesktop: false } ) ),
	toggleDesktopMode: () =>
		set( ( state ) => ( { isDesktop: ! state.isDesktop } ) ),
} );

export default viewportStore;
