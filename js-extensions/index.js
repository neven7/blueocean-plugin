// Provide an ExtensionStore & ExtensionRenderer react component
exports.store = require('./dist/ExtensionStore.js').instance;

exports.Renderer = require('./dist/ExtensionRenderer.js').ExtensionRenderer;

exports.classMetadataStore = require('./dist/ClassMetadataStore.js').instance;

exports.dataType = function dataType(dataType) { return exports.classMetadataStore.dataType(dataType); };

exports.untyped = function untyped() { return exports.classMetadataStore.untyped(); };

exports.componentType = function componentType(componentType) { return exports.classMetadataStore.componentType(componentType); };

exports.init = function init(args) {
    exports.classMetadataStore.init(args.classMetadataProvider);
    exports.store.init({
        extensionDataProvider: args.extensionDataProvider,
        classMetadataStore: exports.classMetadataStore,
    });
};
