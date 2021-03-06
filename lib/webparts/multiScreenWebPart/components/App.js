var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';
import { Header } from './Header';
import { Product } from './Product';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Router, null,
            React.createElement("div", null,
                React.createElement("h2", null, "App"),
                React.createElement(Header, null),
                React.createElement(Route, { path: "/screen1", component: Screen1 }),
                React.createElement(Route, { path: "/screen2", component: Screen2 }),
                React.createElement(Route, { path: "/products/:id", component: Product }),
                React.createElement("div", null, "Footer"))));
    };
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=App.js.map