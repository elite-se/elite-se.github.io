"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const core_1 = require("@material-ui/core");
const LinkListItem_1 = require("../general/LinkListItem");
exports.HomePage = () => (React.createElement(core_1.List, null,
    React.createElement(LinkListItem_1.LinkListItem, { href: "https://elite-se.informatik.uni-augsburg.de", title: "Main Webpage" }),
    React.createElement(LinkListItem_1.LinkListItem, { href: "https://github.com/elite-se/elite-se.protokolle", title: "Exam Protocols" })));
//# sourceMappingURL=HomePage.js.map