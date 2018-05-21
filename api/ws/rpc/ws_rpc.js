

'use strict';

let wsServer = null;

/**
 * Description of the module.
 *
 * @module
 * @see Parent: {@link api.ws.rpc}
 * @requires lodash
 * @requires socketcluster-client
 * @requires wamp-socket-cluster/WAMPClient
 * @requires wamp-socket-cluster/MasterWAMPServe
 * @requires api/ws/rpc/failureCodes
 * @requires helpers/promiseDefer
 * @requires modules/system
 * @todo Add description for the module
 */

/**
 * @alias module:api/ws/rpc/wsRPC
 */
const wsRPC = {
	/**
	 * Description of the function.
	 *
	 * @param {Object} __wsServer
	 * @todo Add description for the function and the params
	 */
	setServer(__wsServer) {
		wsServer = __wsServer;
	},

	/**
	 * Description of the function.
	 *
	 * @throws {Error} If WS server has not been initialized yet
	 * @returns {MasterWAMPServer} wsServer
	 * @todo Add description for the function
	 */
	getServer() {
		if (!wsServer) {
			throw new Error('WS server has not been initialized!');
		}
		return wsServer;
	},

	/**
	 * Description of the function.
	 *
	 * @throws {Error} If WS server has not been initialized yet
	 * @returns {Object} wsServer
	 * @todo Add description for the function
	 */
	getServerAuthKey() {
		if (!wsServer) {
			throw new Error('WS server has not been initialized!');
		}
		return wsServer.socketCluster.options.authKey;
	},
};

const remoteAction = function() {
	throw new Error('Function invoked on master instead of slave process');
};

const slaveRPCStub = {
	updateMyself: remoteAction,
};

module.exports = {
	wsRPC,
	slaveRPCStub,
};
