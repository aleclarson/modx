// Generated by CoffeeScript 1.11.1
var Builder, ElementType, ReactComponent, Type, assertType, type;

ReactComponent = require("ReactComponent");

assertType = require("assertType");

Builder = require("Builder");

Type = require("Type");

ElementType = require("../utils/ElementType");

type = Type("modx_Component");

type.inherits(Builder);

type.trace();

type.defineStatics({
  Mixin: require("./Mixin")
});

type.defineGetters({
  _delegate: function() {
    return this;
  }
});

type.definePrototype({
  _defaultKind: ReactComponent
});

type.overrideMethods({
  inherits: function(kind) {
    if (kind.componentType) {
      kind = kind.componentType;
    }
    return this.__super(arguments);
  },
  defineStatics: function(statics) {
    assertType(statics, Object);
    if (this._statics == null) {
      this._statics = {};
    }
    Object.assign(this._statics, statics);
  },
  build: function() {
    var componentType, elementType, statics;
    componentType = this.__super(arguments);
    elementType = ElementType(componentType);
    if (statics = this._statics) {
      Object.assign(elementType, statics);
      Object.assign(componentType, statics);
    }
    return elementType;
  },
  _defaultBaseCreator: (function() {
    var createInstance;
    createInstance = Builder.prototype._defaultBaseCreator;
    return function(args) {
      var instance;
      instance = createInstance(args);
      ReactComponent.apply(instance, args);
      return instance;
    };
  })()
});

type.addMixins([require("./StyleMixin"), require("./PropsMixin"), require("./LifecycleMixin"), require("./AnimatedMixin"), require("./ReactionMixin"), require("./ListenerMixin"), require("./GatedRenderMixin")]);

module.exports = type.build();
