module.exports = {
  clear: function() {
    return {
      backgroundColor: "transparent"
    };
  },
  cover: function() {
    return {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
  },
  fill: function() {
    return {
      flex: 1,
      alignSelf: "stretch"
    };
  },
  leftAlign: function() {
    return {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start"
    };
  },
  rightAlign: function() {
    return {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end"
    };
  },
  centerItems: function() {
    return {
      alignItems: "center",
      justifyContent: "center"
    };
  },
  size: function(size) {
    return {
      width: size,
      height: size
    };
  },
  diameter: function(size) {
    return {
      width: size,
      height: size,
      borderRadius: size / 2
    };
  }
};

//# sourceMappingURL=map/StylePresets.map