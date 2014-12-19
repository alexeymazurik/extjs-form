Ext.define('IndigoTest.view.Form', {

    extend: 'Ext.form.Panel',
    xtype: 'form-booking',
    config: {},

    initComponent: function(){
        Ext.apply(this, {

            id: 'myForm',
            frame: true,
            title: 'Форма бронирования',

            bodyPadding: 10,
            autoScroll:true,

            width: 355,

            fieldDefaults: {
                labelAlign: 'right',
                labelWidth: 200,
                msgTarget: 'side'
            },

            items: [{
                xtype: 'fieldset',
                title: 'Информация пользователя',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },

                items: [
                    {
                        allowBlank: false,
                        fieldLabel: 'Имя',
                        name: 'name',
                        emptyText: 'Имя пользователя'
                    },
                    {
                        allowBlank: false,
                        fieldLabel: 'email',
                        name: 'email',
                        emptyText: 'E-mail',
                        vtype: 'email'
                    },
                    {
                        xtype: 'numberfield',
                        allowBlank: false,
                        fieldLabel: 'Телефон',
                        name: 'tel',
                        emptyText: 'Телефон'
                    },
                    {
                        xtype: 'datefield',
                        allowBlank: false,
                        fieldLabel: 'Дата рождения',
                        name: 'birthDate',
                        emptyText: 'Дата рождения'
                    },
                    {
                        xtype: 'checkboxfield',
                        name: 'adult',
                        fieldLabel: 'Старше 18 лет?'
                    }
                ]
            }, {
                xtype: 'fieldset',
                title: 'Проживание',

                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },

                items: [{
                    xtype: 'combo',
                    queryMode: 'local',

                    value: 'UA',

                    triggerAction: 'all',
                    forceSelection: true,

                    editable: false,
                    fieldLabel: 'Страна',

                    name: 'country',
                    displayField: 'name',

                    valueField: 'value',

                    store: {
                        fields: ['name', 'value'],
                        data: [
                            { name: 'Украина', value: 'UA' },
                            { name: 'Россия', value: 'RU' },
                            { name: 'Польша', value: 'PL' },
                            { name: 'Беларусь', value: 'BY' }
                        ]
                    }
                },
                    {
                        allowBlank: false,
                        fieldLabel: 'Город',
                        name: 'city'
                    }]
            }],

            buttons: [{
                text: 'Забронировать',
                disabled: true,
                formBind: true,
                handler: this.onBookingClick
            }]
        });
        this.callParent(arguments);
    },
    onBookingClick: function(){
        Ext.Ajax.request({
            url: 'rest/booking',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            params : Ext.JSON.encode(Ext.getCmp('myForm').getValues()),
            success: function(response) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);
            },
            failure: function(response) {
                console.log('server-side failure with status code ' + response.status);
            }
        })
    }


});