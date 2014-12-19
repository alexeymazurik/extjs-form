Ext.application({
    requires: ['Ext.container.Viewport'],

    name : 'IndigoTest',
    appFolder: 'app',
    controllers: 'Users',


    launch : function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'form-booking'
                }
            ]
        });
    }
});