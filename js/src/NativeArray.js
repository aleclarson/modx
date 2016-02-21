var Factory, NativeValue, Void, assert, isType, ref;

ref = require("type-utils"), assert = ref.assert, isType = ref.isType, Void = ref.Void;

Factory = require("factory");

NativeValue = require("./NativeValue");

module.exports = Factory("NativeArray", {
  kind: NativeValue,
  create: function() {
    return {};
  },
  optionTypes: {
    keyPath: [String, Void],
    length: Number
  },
  initArguments: function(keyPath, length) {
    if (isType(keyPath, Number)) {
      length = keyPath;
      keyPath = null;
    }
    return [
      {
        keyPath: keyPath,
        length: length
      }
    ];
  },
  initFrozenValues: function(options) {
    return {
      length: options.length,
      _array: []
    };
  },
  initValues: function(options) {
    return {
      keyPath: options.keyPath
    };
  },
  get: function(index) {
    var nativeValue;
    assert((index >= 0) && (index < this.length), {
      index: index,
      length: this.length,
      reason: "Index is out of bounds!"
    });
    nativeValue = this._array[index];
    if (nativeValue == null) {
      nativeValue = this._array[index] = NativeValue(null, (this.keyPath || "") + ("" + index));
      nativeValue.index = index;
    }
    return nativeValue;
  },
  detach: function() {
    return sync.each(this._array, function(nativeValue) {
      return nativeValue.detach();
    });
  },
  addListener: function() {
    throw Error("Not yet supported!");
  }
});

//# sourceMappingURL=../../map/src/NativeArray.map
