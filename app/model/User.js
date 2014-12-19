Ext.define('IndigoTest.model.User', {

    extend: 'Ext.data.Model',
    fields: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'tel', type: 'int' },
        { name: 'birthDate', type: 'date' },
        { name: 'adult', type: 'boolean' },
        { name: 'country', type: 'string' },
        { name: 'city', type: 'string' }
    ],
    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'data'
        },
        api: {
            create: '/ExampleService.svc/book/'
        }
    }
});