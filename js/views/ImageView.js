// Generated by CoffeeScript 1.12.4
var AnimatedValue, EdgeInsetsType, Image, ImageResizeMode, NativeComponent, Null, OneOf, React, Shape, Style, type;

AnimatedValue = require("Animated").AnimatedValue;

Style = require("react-validators").Style;

React = require("react");

Image = require("Image");

Shape = require("Shape");

OneOf = require("OneOf");

Null = require("Null");

NativeComponent = require("../NativeComponent");

ImageResizeMode = OneOf("ImageResizeMode", "cover contain stretch center");

EdgeInsetsType = Shape("EdgeInsetsType", {
  top: Number.Maybe,
  left: Number.Maybe,
  bottom: Number.Maybe,
  right: Number.Maybe
});

type = NativeComponent("ImageView");

type.render(function(props) {
  return React.createElement(Image, props);
});

type.defineProps({
  style: Style,
  source: Object.or(Null),
  defaultSource: Object,
  resizeMode: ImageResizeMode,
  capInsets: EdgeInsetsType,
  onLayout: Function,
  onLoadStart: Function,
  onProgress: Function,
  onError: Function,
  onLoad: Function,
  onLoadEnd: Function,
  testID: String
});

type.defineValues(function() {
  return {
    source: this.props.source
  };
});

type.defineListeners(function() {
  if (this.source instanceof AnimatedValue) {
    return this.source.didSet((function(_this) {
      return function() {
        return _this.forceUpdate();
      };
    })(this));
  }
});

module.exports = type.build();