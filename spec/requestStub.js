module.exports = function( adapterStub ) {
	var junk = [];
	var req = {
	};
	return function request( opts, cb ) {
		request.state = req;
		adapterStub( { href: opts.url }, opts )
			.then( function( res ) {
				var body = "";
				if ( res ) {
					body = _.isString( res ) ? res : JSON.stringify( res );
				}
				cb( null, null, body );
			} )
			.catch( function( err ) {
				cb( err, null, null );
				return true;
			} );
		return req;
	};
};
