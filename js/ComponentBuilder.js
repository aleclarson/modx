var Builder, ReactComponent, Type, assertType, type;

ReactComponent = require("ReactComponent");

assertType = require("assertType");

Builder = require("Builder");

Type = require("Type");

type = Type("modx_ComponentBuilder");

type.inherits(Builder);

type.trace();

type.defineGetters({
  _delegate: function() {
    return this;
  }
});

type.definePrototype({
  _defaultKind: ReactComponent
});

type.overrideMethods({
  _defaultBaseCreator: function(args) {
    var instance;
    instance = Builder.prototype._defaultBaseCreator.call(null, args);
    ReactComponent.apply(instance, args);
    return instance;
  }
});

type.addMixins([require("./mixins/PropsMixin"), require("./mixins/LifecycleMixin"), require("./mixins/StyleMixin"), require("./mixins/NativeValueMixin"), require("./mixins/ListenerMixin"), require("./mixins/ReactionMixin"), require("./mixins/GatedRenderMixin")]);

module.exports = type.build();

//# sourceMappingURL=map/ComponentBuilder.map
