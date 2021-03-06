
Builder = require "Builder"
Mixin = require "Mixin"

module.exports = Mixin.create
  extends: Builder.Mixin
  methods: [
    "inheritProps"
    "definePropDefaults"
    "defineProps"
    "replaceProps"
    "initProps"
    "render"
    "isRenderPrevented"
    "shouldUpdate"
    "willReceiveProps"
    "willMount"
    "didMount"
    "willUnmount"
    "willUpdate"
    "didUpdate"
    "defineNativeValues"
    "defineAnimatedValues"
    "defineReactions"
    "defineListeners"
    "defineStyles"
    "appendStyles"
    "overrideStyles"
  ]
