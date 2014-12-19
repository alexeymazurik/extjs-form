Ext.define('IndigoTest.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [ 'Form'],
    models: ['User'],

    init: function() {
        console.log('All content load successfully!');
    }
});