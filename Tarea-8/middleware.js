const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || authHeader.split(' ')[1] !== 'mysecrettoken') {
        return res.status(403).json({ message: 'No autorizado' });
    }

    next();
};

export default authMiddleware;