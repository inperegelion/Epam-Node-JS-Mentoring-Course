// todo: google which type a function should implement
export function log(req, res, next) {
    console.log(`🌳🪓 ${new Date().toISOString()} 🎯 '${req.url}'`);
    next();
}
