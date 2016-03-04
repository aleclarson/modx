var LazyVar, NativeComponent;

LazyVar = require("lazy-var");

NativeComponent = require("./NativeComponent");

module.exports = {
  View: LazyVar(function() {
    return NativeComponent("View", require("View"));
  }),
  ImageView: LazyVar(function() {
    return NativeComponent("ImageView", require("Image"));
  }),
  TextView: LazyVar(function() {
    return NativeComponent("TextView", require("Text"));
  }),
  TextInput: LazyVar(function() {
    return NativeComponent("TextInput", require("TextInput"));
  }),
  ScrollView: LazyVar(function() {
    return NativeComponent("ScrollView", require("ScrollView"));
  }),
  ListView: LazyVar(function() {
    var ListView;
    ListView = NativeComponent("ListView", require("ListView"));
    ListView.DataSource = require("ListViewDataSource");
    return ListView;
  }),
  WebView: LazyVar(function() {
    return NativeComponent("WebView", require("WebView"));
  }),
  Touchable: LazyVar(function() {
    var Touchable;
    Touchable = require("TouchableWithoutFeedback");
    Touchable.displayName = "Touchable";
    return (require("ReactElement")).createFactory(Touchable);
  }),
  StaticRenderer: LazyVar(function() {
    var StaticRenderer;
    StaticRenderer = require("StaticRenderer");
    StaticRenderer.displayName = "StaticRenderer";
    return (require("ReactElement")).createFactory(StaticRenderer);
  }),
  Easing: LazyVar(function() {
    return require("Easing");
  }),
  Interpolation: LazyVar(function() {
    return require("Interpolation");
  }),
  NativeModules: LazyVar(function() {
    return require("NativeModules");
  }),
  Children: LazyVar(function() {
    return require("./Children");
  }),
  Style: LazyVar(function() {
    return require("./Style");
  })
};

//# sourceMappingURL=../../map/src/React.map
