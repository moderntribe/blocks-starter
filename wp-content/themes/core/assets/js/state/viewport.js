export const viewportStore = ( set ) => ( {
	viewportHeight: window.innerHeight,
	setViewportHeight: () =>
		set( () => ( { viewportHeight: window.innerHeight } ) ),
	viewportWidth: window.innerWidth,
	setViewportWidth: () =>
		set( () => ( { viewportWidth: window.innerWidth } ) ),
	isDesktop: false,
	setDesktopMode: () => set( () => ( { isDesktop: true } ) ),
	setMobileMode: () => set( () => ( { isDesktop: false } ) ),
	toggleDesktopMode: () =>
		set( ( state ) => ( { isDesktop: ! state.isDesktop } ) ),
} );

export default viewportStore;
