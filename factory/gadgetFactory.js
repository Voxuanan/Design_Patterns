const Laptop = require("./laptop");
const Tablet = require("./tablet");
const gadget = { Laptop, Tablet };
module.exports = {
    createGadget(type, attributes) {
        const GadgetType = gadget[type];
        if (GadgetType == undefined) {
            throw new Error(`Type "${type}" not defined in gadgetFactory`);
        }
        return new GadgetType(attributes);
    },
};
