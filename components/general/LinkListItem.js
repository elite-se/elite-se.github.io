"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const core_1 = require("@material-ui/core");
const Link_1 = tslib_1.__importDefault(require("@material-ui/icons/Link"));
exports.LinkListItem = (props) => (React.createElement(core_1.ListItem, { button: true },
    React.createElement(core_1.ListItemIcon, null,
        React.createElement(Link_1.default, null)),
    React.createElement(core_1.ListItemText, { primary: React.createElement(core_1.Link, { href: props.href, target: "_blank" }, props.title) })));
//# sourceMappingURL=LinkListItem.js.map