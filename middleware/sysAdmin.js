module.exports = function (req, res, next) {
    if (req.user.level !== 5) return res.status(403).json({'Error':'Access denied, access level only for system admin!'});
    next();
};
