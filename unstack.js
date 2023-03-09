( function( $ ) {

	if( !$ ) return;

	function UnstackX( wrapper ) {

		var Labels = [];
		wrapper.find( '>table.unstack-x>thead>tr:first-child>*' ).each( function( i ) {
			Labels[ i ] = $( this ).html();
		} );
		if( Labels.length < 1 ) {
			wrapper.find( '>table.unstack-x>tbody>tr:first-child>*' ).each( function( i ) {
				Labels[ i ] = $( this ).html();
			} );
		}

		var GroupListEl = $( '<ul/>' ).addClass( 'unstack-list' ).appendTo( wrapper );
		wrapper.find( '>table.unstack-x>tbody>tr:not(:first-child)' ).each( function( i ) {
			var GroupListItemEl = $( '<li/>' ).appendTo( GroupListEl );
			var SubgroupListEl = $( '<ul/>' ).appendTo( GroupListItemEl );
			$( this ).find( '>*' ).each( function( ii ) {
				var SubgroupListItemEl = $( '<li/>' ).appendTo( SubgroupListEl );
				$( '<span/>' ).addClass( 'label' ).html( Labels[ ii ] ).appendTo( SubgroupListItemEl );
				$( '<span/>' ).html( $( this ).html() ).appendTo( SubgroupListItemEl );
			} );
		} );

	}

	function UnstackY( wrapper ) {

		var Labels = [];
		wrapper.find( '>table.unstack-y>tbody>tr>*:first-child' ).each( function( i ) {
			Labels[ i ] = $( this ).html();
		} );

		var GroupListEl = $( '<ul/>' ).addClass( 'unstack-list' ).appendTo( wrapper );
		wrapper.find( '>table.unstack-y>tbody>tr:first-child>*:not(:first-child)' ).each( function( i ) {
			var GroupListItemEl = $( '<li/>' ).appendTo( GroupListEl );
			var SubgroupListEl = $( '<ul/>' ).appendTo( GroupListItemEl );
			wrapper.find( '>tr' ).each( function( ii ) {
				$( this ).find( '>*:not(:first-child)' ).each( function( iii ) {
					if( i !== iii ) return;
					var SubgroupListItemEl = $( '<li/>' ).appendTo( SubgroupListEl );
					$( '<span/>' ).addClass( 'label' ).html( Labels[ ii ] ).appendTo( SubgroupListItemEl );
					$( '<span/>' ).html( $( this ).html() ).appendTo( SubgroupListItemEl );
				} );
			} );
		} );

	}

	function Unstack() {
		$( '.unstack-x' ).each( function() {
			$( this ).wrap( '<div class="unstack-wrapper"></div>' );
			var Wrapper = $( $( this ).parents( '.unstack-wrapper' ).get( 0 ) );
			if( $( this ).hasClass( 'unstack-medium' ) ) Wrapper.addClass( 'unstack-medium' );
			if( $( this ).hasClass( 'unstack-large' ) ) Wrapper.addClass( 'unstack-large' );
			UnstackX( Wrapper );
		} );
		$( '.unstack-y' ).each( function() {
			$( this ).wrap( '<div class="unstack-wrapper"></div>' );
			var Wrapper = $( $( this ).parents( '.unstack-wrapper' ).get( 0 ) );
			if( $( this ).hasClass( 'unstack-medium' ) ) Wrapper.addClass( 'unstack-medium' );
			if( $( this ).hasClass( 'unstack-large' ) ) Wrapper.addClass( 'unstack-large' );
			UnstackY( Wrapper );
		} );
	}

	$( function() { Unstack(); } );

} )( jQuery );
