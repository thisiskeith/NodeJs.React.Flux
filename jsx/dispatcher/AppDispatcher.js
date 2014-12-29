e strict';

var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var Dispatcher = require('flux').Dispatcher;

var PayloadSources = AppConstants.PayloadSources;

var AppDispatcher = assign(new Dispatcher(), {

    handleServerAction: function (action) {
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    handleViewAction: function (action) {
        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
});

module.exports = AppDispatcher;
