const express = require('express');

const router = express.Router({});
router.get('/', async (_req, res) => {
	//  add further things to check (e.g. connecting to dababase)
	const healthcheck = {
		uptime: process.uptime(),
		status: 'UP',
		timestamp: Date.now(),
	};
	try {
		res.send(healthcheck);
	} catch (e) {
		healthcheck.message = e;
		res.status(503).send();
	}
});
// export router with all routes included
module.exports = router;