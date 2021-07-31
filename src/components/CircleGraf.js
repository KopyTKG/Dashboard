let React = require('react');

/* Default */
let VIEWBOX_WIDTH = 90;
let VIEWBOX_HEIGHT = 90;
let VIEWBOX_HEIGHT_HALF = 45;
let VIEWBOX_CENTER_X = 45;
let VIEWBOX_CENTER_Y = 45;

var extendStatics = (d, b) => 
    {
        extendStatics = Object.setPrototypeOf ||
            (
                { 
                    __proto__: [] 
                } 
                instanceof Array && 
                function (d, b) 
                { 
                    d.__proto__ = b; 
                }
            ) ||
            function (d, b) {
                 for (var p in b) 
                    if (b.hasOwnProperty(p)) d[p] = b[p]; 
                };
    return extendStatics(d, b);
    };

function __extends(d, b) {
    extendStatics(d, b);
    function __() 
    {
        this.constructor = d; 
    }
    d.prototype = b === null ? 
                                Object.create(b) : 
                                (__.prototype = b.prototype, new __());
}



function Path(_a) {
    let className = _a.className;
    let counterClockwise = _a.counterClockwise;
    let dashRatio = _a.dashRatio;
    let pathRadius = _a.pathRadius;
    let strokeWidth = _a.strokeWidth;
    let style = _a.style;
    return (React.createElement("path", 
        { 
            className: className, 
            style: Object.assign(
                {}, 
                style, 
                getDashStyle(
                    { 
                        pathRadius: pathRadius, 
                        dashRatio: dashRatio, 
                        counterClockwise: counterClockwise 
                    })
            ), 
            d: getPathDescription(
                {
                    pathRadius: pathRadius,
                    counterClockwise: counterClockwise,
                }
            ), 
            strokeWidth: strokeWidth, 
            fillOpacity: 0 
         }));
}

function getPathDescription(_a) {
    let pathRadius = _a.pathRadius;
    let counterClockwise = _a.counterClockwise;
    let radius = pathRadius;
    let rotation = counterClockwise ? 1 : 0;
    return  (
        "\n      M " +
        VIEWBOX_CENTER_X +
        "," +
        VIEWBOX_CENTER_Y +
        "\n      m 0,-" + 
        radius + 
        "\n      a " + 
        radius + 
        "," + 
        radius + 
        " " + 
        rotation + 
        " 1 1 0," + 
        2 * radius + 
        "\n      a " + 
        radius + 
        "," + 
        radius + 
        " " + 
        rotation + 
        " 1 1 0,-" + 
        2 * radius + 
        "\n    "
        );
}

function getDashStyle(_a) {
    let counterClockwise = _a.counterClockwise;
    let dashRatio = _a.dashRatio;
    let pathRadius = _a.pathRadius;
    let diameter = Math.PI * 2 * pathRadius;
    let gapLength = (1 - dashRatio) * diameter;
    return {
        strokeDasharray: diameter + "px " + diameter + "px",
        strokeDashoffset: (counterClockwise ? -gapLength : gapLength) + "px",
    };
}

var CircularProgressbar = (function (_super) {
    __extends(CircularProgressbar, _super);
    function CircularProgressbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircularProgressbar.prototype.getBackgroundPadding = function () {
        if (!this.props.background) {
            return 0;
        }
        return this.props.backgroundPadding;
    };
    CircularProgressbar.prototype.getPathRadius = function () {
        return VIEWBOX_HEIGHT_HALF - this.props.strokeWidth / 2 - this.getBackgroundPadding();
    };
    CircularProgressbar.prototype.getPathRatio = function () {
        let _a = this.props;
        let value = _a.value;
        let minValue = _a.minValue;
        let maxValue = _a.maxValue;
        let boundedValue = Math.min(Math.max(value, minValue), maxValue);
        return (boundedValue - minValue) / (maxValue - minValue);
    };
    CircularProgressbar.prototype.render = function () {
        let _a = this.props;
        let circleRatio = _a.circleRatio;
        let className = _a.className;
        let classes = _a.classes;
        let counterClockwise = _a.counterClockwise;
        let styles = _a.styles;
        let strokeWidth = _a.strokeWidth;
        let text = _a.text;
        let pathRadius = this.getPathRadius();
        let pathRatio = this.getPathRatio();
        return (
            React.createElement("svg", 
            { 
                className: classes.root + " " + className,
                style: styles.root,
                viewBox: "0 0 " + VIEWBOX_WIDTH + " " + VIEWBOX_HEIGHT,
                "data-test-id": "CircularProgressbar" 
            },
            this.props.background ? (
                React.createElement("circle", 
                { 
                    className: classes.background,
                    style: styles.background, cx: VIEWBOX_CENTER_X, 
                    cy: VIEWBOX_CENTER_Y, r: VIEWBOX_HEIGHT_HALF 
                })) : null,
            React.createElement(Path, 
                { 
                    className: classes.trail, 
                    counterClockwise: counterClockwise, 
                    dashRatio: circleRatio, 
                    pathRadius: pathRadius, 
                    strokeWidth: strokeWidth, 
                    style: styles.trail 
                }),
            React.createElement(Path, { 
                counterClockwise: counterClockwise, 
                dashRatio: pathRatio * circleRatio, 
                pathRadius: pathRadius, 
                strokeWidth: strokeWidth, 
                style: styles.path 
            }),
            text ? (
                React.createElement("text", 
                { 
                    style: styles.text, 
                    x: VIEWBOX_CENTER_X, 
                    y: VIEWBOX_CENTER_Y 
                }, text)) : null));
    };

    CircularProgressbar.defaultProps = {
        background: false,
        backgroundPadding: 0,
        circleRatio: 1,
        classes: {
            root: 'CircularProgressbar',
            trail: 'CircularProgressbar-trail',
            background: 'CircularProgressbar-background',
        },
        counterClockwise: false,
        className: '',
        maxValue: 100,
        minValue: 0,
        strokeWidth: 8,
        styles: {
            root: {},
            trail: {},
            path: {},
            text: {},
            background: {},
        },
        text: '',
    };
    return CircularProgressbar;
}(React.Component));

exports.CircularProgressbar = CircularProgressbar;