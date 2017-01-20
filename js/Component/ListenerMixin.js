// Generated by CoffeeScript 1.11.1
var Event, Mixin, defineListeners, frozen, mixin;

frozen = require("Property").frozen;

Event = require("Event");

Mixin = require("./Mixin");

module.exports = function(type) {
  return type.defineMethods({
    defineListeners: defineListeners
  });
};

defineListeners = function(createListeners) {
  var delegate, kind;
  delegate = this._delegate;
  if (!delegate._hasListeners) {
    frozen.define(delegate, "_hasListeners", {
      value: true
    });
    kind = delegate._kind;
    if (!(kind && kind.prototype._hasListeners)) {
      mixin.apply(delegate);
    }
  }
  return delegate.willMount(function(args) {
    var listeners, onAttach;
    listeners = this.__listeners;
    onAttach = function(listener) {
      return listeners.push(listener.start());
    };
    onAttach = Event.didAttach(onAttach).start();
    createListeners.apply(this, args);
    return onAttach.detach();
  });
};

mixin = Mixin();

mixin.defineValues(function() {
  return {
    __listeners: []
  };
});

mixin.willUnmount(function() {
  var i, len, listener, ref;
  ref = this.__listeners;
  for (i = 0, len = ref.length; i < len; i++) {
    listener = ref[i];
    listener.detach();
  }
  return this.__listeners = [];
});

mixin.didBuild(function(type) {
  return frozen.define(type.prototype, "_hasListeners", {
    value: true
  });
});