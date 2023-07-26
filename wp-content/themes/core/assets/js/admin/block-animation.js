import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

const applyAnimationProps = ( props, blockType, attributes ) => {
	const {
		animationStyle,
		animationSpeed,
		animationDelay,
		animationEasing,
		animationTrigger,
		animationPosition,
	} = attributes;

	if ( animationStyle === undefined || animationStyle === 'none' ) {
		return props;
	}

	props.className =
		animationPosition !== undefined && animationPosition
			? `${ props.className } tribe-animation-style-${ animationStyle } is-animated-on-scroll-full`
			: `${ props.className } tribe-animation-style-${ animationStyle } is-animated-on-scroll`;

	if ( animationSpeed !== undefined && animationSpeed ) {
		props.style = {
			...props.style,
			'--tribe-animation-speed': animationSpeed,
		};
	}

	if ( animationDelay !== undefined && animationDelay ) {
		props.style = {
			...props.style,
			'--tribe-animation-delay': animationDelay,
		};
	}

	if ( animationEasing !== undefined && animationEasing ) {
		props.style = {
			...props.style,
			'--tribe-animation-easing': animationEasing,
		};
	}

	if ( animationTrigger !== undefined && animationTrigger ) {
		props.className = `${ props.className } tribe-animate-multiple`;
	}

	return props;
};

const animationControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { attributes, setAttributes, isSelected } = props;
		const {
			animationStyle,
			animationSpeed,
			animationDelay,
			animationEasing,
			animationTrigger,
			animationPosition,
		} = attributes;

		let blockClass =
			attributes.className !== undefined ? attributes.className : '';
		const blockStyles = { ...props.style };

		if ( animationStyle !== undefined && animationStyle !== 'none' ) {
			blockClass =
				animationPosition !== undefined && animationPosition
					? `${ blockClass } tribe-animation-style-${ animationStyle } is-animated-on-scroll-full`
					: `${ blockClass } tribe-animation-style-${ animationStyle } is-animated-on-scroll`;

			if ( animationSpeed !== undefined && animationSpeed ) {
				blockStyles[ '--tribe-animation-speed' ] = animationSpeed;
			}

			if ( animationDelay !== undefined && animationDelay ) {
				blockStyles[ '--tribe-animation-delay' ] = animationDelay;
			}

			if ( animationEasing !== undefined && animationEasing ) {
				blockStyles[ '--tribe-animation-easing' ] = animationEasing;
			}

			if ( animationTrigger !== undefined && animationTrigger ) {
				blockClass = `${ blockClass } tribe-animate-multiple`;
			}
		}

		const blockProps = {
			...props,
			attributes: {
				...attributes,
				className: blockClass,
			},
			style: blockStyles,
		};

		return (
			<Fragment>
				<div style={ blockStyles } className={ blockClass }>
					<BlockEdit { ...blockProps } />
					{ isSelected && (
						<InspectorControls>
							<PanelBody
								title="Tribe Animations"
								initialOpen={ false }
							>
								<SelectControl
									label="Animation Style"
									value={ animationStyle ?? 'none' }
									help="Animation style is the type of animation you want to display."
									onChange={ ( newValue ) => {
										setAttributes( {
											animationStyle: newValue,
										} );
									} }
									options={ [
										{
											label: __( 'None', 'tribe' ),
											value: 'none',
										},
										{
											label: __( 'Fade In', 'tribe' ),
											value: 'fade-in',
										},
										{
											label: __( 'Fade In Up', 'tribe' ),
											value: 'fade-in-up',
										},
										{
											label: __(
												'Fade In Down',
												'tribe'
											),
											value: 'fade-in-down',
										},
										{
											label: __(
												'Fade In Right',
												'tribe'
											),
											value: 'fade-in-right',
										},
										{
											label: __(
												'Fade In Left',
												'tribe'
											),
											value: 'fade-in-left',
										},
									] }
								/>
								<SelectControl
									label="Animation Speed"
									value={ animationSpeed ?? '0.3s' }
									help="Animation speed is the speed at which the animation should run."
									onChange={ ( newValue ) =>
										setAttributes( {
											animationSpeed: newValue,
										} )
									}
									options={ [
										{
											label: __( 'Extra Slow', 'tribe' ),
											value: '0.7s',
										},
										{
											label: __( 'Slow', 'tribe' ),
											value: '0.5s',
										},
										{
											label: __( 'Normal', 'tribe' ),
											value: '0.3s',
										},
										{
											label: __( 'Fast', 'tribe' ),
											value: '0.2s',
										},
										{
											label: __( 'Extra Fast', 'tribe' ),
											value: '0.1s',
										},
									] }
								/>
								<SelectControl
									label="Animation Delay"
									value={ animationDelay ?? '0s' }
									help="Animation delay adds extra time before the animation starts."
									onChange={ ( newValue ) =>
										setAttributes( {
											animationDelay: newValue,
										} )
									}
									options={ [
										{
											label: __( 'None', 'tribe' ),
											value: '0s',
										},
										{
											label: __( 'Extra Short', 'tribe' ),
											value: '0.1s',
										},
										{
											label: __( 'Short', 'tribe' ),
											value: '0.2s',
										},
										{
											label: __( 'Medium', 'tribe' ),
											value: '0.3s',
										},
										{
											label: __( 'Long', 'tribe' ),
											value: '0.5s',
										},
										{
											label: __( 'Extra Long', 'tribe' ),
											value: '0.7s',
										},
									] }
								/>
								<SelectControl
									label={ __( 'Animation Easing', 'tribe' ) }
									value={ animationEasing ?? 'ease' }
									help={ __(
										'Animation easing determines what easing function the animation should use.',
										'tribe'
									) }
									onChange={ ( newValue ) =>
										setAttributes( {
											animationEasing: newValue,
										} )
									}
									options={ [
										{
											label: __( 'Ease', 'tribe' ),
											value: 'ease',
										},
										{
											label: __( 'Ease In', 'tribe' ),
											value: 'ease-in',
										},
										{
											label: __( 'Ease Out', 'tribe' ),
											value: 'ease-out',
										},
										{
											label: __( 'Ease In Out', 'tribe' ),
											value: 'ease-in-out',
										},
										{
											label: __( 'Linear', 'tribe' ),
											value: 'linear',
										},
									] }
								/>
								<ToggleControl
									label={ __(
										'Animation should trigger every time the element is in the viewport',
										'tribe'
									) }
									help={ __(
										'Default functionality is to trigger the animation once.',
										'tribe'
									) }
									checked={ !! animationTrigger }
									onChange={ ( newValue ) =>
										setAttributes( {
											animationTrigger: newValue,
										} )
									}
								/>
								<ToggleControl
									label={ __(
										'Animation should trigger when the element is completely in the viewport',
										'tribe'
									) }
									help={ __(
										'Default functionality is to trigger the animation when 25% of it is in the viewport.',
										'tribe'
									) }
									checked={ !! animationPosition }
									onChange={ ( newValue ) =>
										setAttributes( {
											animationPosition: newValue,
										} )
									}
								/>
							</PanelBody>
						</InspectorControls>
					) }
				</div>
			</Fragment>
		);
	};
}, 'animationControls' );

const addAnimationAttributes = ( settings ) => {
	if ( settings?.attributes !== undefined ) {
		settings.attributes = {
			...settings.attributes,
			animationStyle: {
				type: 'string',
			},
			animationSpeed: {
				type: 'string',
			},
			animationDelay: {
				type: 'string',
			},
			animationEasing: {
				type: 'string',
			},
			animationTrigger: {
				type: 'boolean',
			},
			animationPosition: {
				type: 'boolean',
			},
		};
	}

	return settings;
};

const handleFilters = () => {
	addFilter(
		'blocks.registerBlockType',
		'tribe/add-animation-options',
		addAnimationAttributes
	);

	addFilter(
		'editor.BlockEdit',
		'tribe/animation-advanced-control',
		animationControls
	);

	addFilter(
		'blocks.getSaveContent.extraProps',
		'tribe/apply-animation-classes',
		applyAnimationProps
	);
};

const init = () => {
	handleFilters();
};

export default init;
