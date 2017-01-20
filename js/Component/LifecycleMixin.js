// Generated by CoffeeScript 1.11.1
var Builder, ReactComponent, applyChain, assertType, emptyFunction, inheritArray, inheritArrays, instMixin, mixin, mutable, viewImpl;

mutable = require("Property").mutable;

ReactComponent = require("ReactComponent");

emptyFunction = require("emptyFunction");

assertType = require("assertType");

applyChain = require("applyChain");

Builder = require("Builder");

mixin = Builder.Mixin();

mixin.defineMethods({
  render: function(func) {
    assertType(func, Function);
    mutable.define(this, "_render", {
      value: func
    });
  },
  shouldUpdate: function(func) {
    assertType(func, Function);
    mutable.define(this, "_shouldUpdate", {
      value: func
    });
  },
  willReceiveProps: function(func) {
    assertType(func, Function);
    mutable.define(this, "_willReceiveProps", {
      value: func
    });
  },
  willMount: function(func) {
    assertType(func, Function);
    this._phases.willMount.push(func);
  },
  didMount: function(func) {
    assertType(func, Function);
    this._phases.didMount.push(func);
  },
  willUpdate: function(func) {
    assertType(func, Function);
    this._phases.willUpdate.push(func);
  },
  didUpdate: function(func) {
    assertType(func, Function);
    this._phases.didUpdate.push(func);
  },
  willUnmount: function(func) {
    assertType(func, Function);
    this._phases.willUnmount.push(func);
  }
});

mixin.initInstance(function() {
  this._phases.willMount = [];
  this._phases.didMount = [];
  this._phases.willUpdate = [];
  this._phases.didUpdate = [];
  this._phases.willUnmount = [];
  return this.addMixin(instMixin.apply);
});

module.exports = mixin.apply;

instMixin = Builder.Mixin();

instMixin.willBuild(function() {
  var kind, ownMethods;
  kind = this._kind;
  ownMethods = {};
  if (kind === false) {
    this.defineMethods(viewImpl);
    ownMethods.__render = this._render || emptyFunction.thatReturnsFalse;
    ownMethods.__shouldUpdate = this._shouldUpdate || emptyFunction.thatReturnsTrue;
    ownMethods.__willReceiveProps = this._willReceiveProps || emptyFunction;
    this._delegate.defineMethods(ownMethods);
  } else {
    this._render && (ownMethods.__render = this._render);
    this._shouldUpdate && (ownMethods.__shouldUpdate = this._shouldUpdate);
    this._willReceiveProps && (ownMethods.__willReceiveProps = this._willReceiveProps);
    this._delegate.overrideMethods(ownMethods);
    inheritArrays(this._phases, {
      willMount: kind.prototype.__willMount,
      didMount: kind.prototype.__didMount,
      willUpdate: kind.prototype.__willUpdate,
      didUpdate: kind.prototype.__didUpdate,
      willUnmount: kind.prototype.__willUnmount
    });
  }
  return this.definePrototype({
    __willMount: this._phases.willMount,
    __didMount: this._phases.didMount,
    __willUpdate: this._phases.willUpdate,
    __didUpdate: this._phases.didUpdate,
    __willUnmount: this._phases.willUnmount
  });
});

viewImpl = {
  render: function() {
    return this._delegate.__render();
  },
  shouldComponentUpdate: function(nextProps) {
    return this._delegate.__shouldUpdate(nextProps);
  },
  componentWillReceiveProps: function(nextProps) {
    return this._delegate.__willReceiveProps(nextProps);
  },
  componentWillMount: function() {
    return applyChain(this.__willMount, this._delegate);
  },
  componentDidMount: function() {
    return applyChain(this.__didMount, this._delegate);
  },
  componentWillUpdate: function() {
    return applyChain(this.__willUpdate, this._delegate);
  },
  componentDidUpdate: function() {
    return applyChain(this.__didUpdate, this._delegate);
  },
  componentWillUnmount: function() {
    return applyChain(this.__willUnmount, this._delegate);
  }
};

inheritArrays = function(obj, arrayMap) {
  var array, key;
  for (key in arrayMap) {
    array = arrayMap[key];
    if (Array.isArray(array)) {
      inheritArray(obj, key, array);
    }
  }
};

inheritArray = function(obj, key, inherited) {
  assertType(inherited, Array);
  if (obj[key].length) {
    if (!inherited.length) {
      return;
    }
    obj[key] = inherited.concat(obj[key]);
  } else {
    obj[key] = inherited;
  }
};