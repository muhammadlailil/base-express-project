let requireDirectory = require("require-directory");

const controllers = requireDirectory(module, './', {
    rename: namespace
});

function namespace(name) {
    return name.replace(/(\b|\.)\w/g, l => l.toUpperCase()).replace('.', '')
}

function slashNotation(string, object) {
    return string.split('/').reduce((o, i) => o[i], object)
}

let CTRL = function(ctrllr){
    const [controllerName, methodName] = ctrllr.split('@');
    const controller = slashNotation(controllerName, controllers);
    const method = controller[methodName];

    const { middleware:ctrlrmiddleware = [] } = controller;
    const {
        middleware = [], posmiddleware = []
    } = method;
    return [...ctrlrmiddleware, ...middleware, method, ...posmiddleware]
    // return [method]
};

module.exports = CTRL;
