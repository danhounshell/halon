global.halon = require( "../../lib/halon.js" );
global.adapterFactory = require( "../adapterStub.js" );
global.requestFactory = require( "../requestStub.js" );
require( "mocha" );
global.sinon = require( "sinon" );
require( "sinon-as-promised" );
var chai = require( "chai" );
chai.use( require( "sinon-chai" ) );
chai.use( require( "chai-as-promised" ) );
global.should = chai.should();
global.expectedOptionsResponse = require( "../mockResponses/options.json" );
global.expectedBoardResponse = require( "../mockResponses/board101.json" );
global.expectedCardResponse = require( "../mockResponses/board101cards.json" );
global.expectedCardTypeResponse = require( "../mockResponses/board101cardtypes.json" );
global.expectedUserResponse = require( "../mockResponses/user1.json" );
global._ = require( "lodash" );
global.when = require( "when" );
