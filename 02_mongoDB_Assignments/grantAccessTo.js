function grantAccessTo(roles) {
	try {
		return function (req, res, next) {
			const { role } = req.body;
			if (!roles.includes(role)) {
				return res.status(403).json({
					status: "error",
					message: "Access Denied",
				});
			} else {
				next();
			}
		};
	} catch (err) {
		return res.status(400).json({
			status: "error",
			message: "Unable to check access level",
		});
	}
}

module.exports = { grantAccessTo };
