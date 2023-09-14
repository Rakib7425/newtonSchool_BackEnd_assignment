/*
    - Complete the Middleware grantAccessTo to manage access control for userRoutes. 
    - The middleware takes an array of roles as the parameter
    - Access should be granted to all roles in the parameter
    - Throw an error 403(Forbidden), if the role doesnt have access, in the given format: 
    {
        "status": "error",
        "message": "Access Denied"
    }
*/

function grantAccessTo(roles) {
	return (req, res, next) => {
		try {
			const userRole = req.body.role;

			if (!userRole) {
				return res.status(403).json({
					status: "error",
					message: "Role not provided",
				});
			}

			if (roles.includes(userRole)) {
				// User's role has access, proceed to the next middleware/route handler.
				next();
			} else {
				// User's role does not have access, return a 403 Forbidden response.
				return res.status(403).json({
					status: "error",
					message: "Access Denied",
				});
			}
		} catch (err) {
			// An error occurred while checking access, return a 400 Bad Request response.
			return res.status(400).json({
				status: "error",
				message: "Unable to check access level",
			});
		}
	};
}

// Export the middleware function as a module.
module.exports = grantAccessTo;
