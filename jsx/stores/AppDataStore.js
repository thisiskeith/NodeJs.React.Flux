'use strict';

var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _appData = {};

var AppDataStore = assign({}, EventEmitter.prototype, {

    getAll: function () {
        return _appData;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeChangeListener(CHANGE_EVENT, callback);
    }
});

AppDataStore.dispatchToken = AppDispatcher.register(function (payload) {

    var action = payload.action;

    switch (action.type) {

    default:
        break;
    }

    AppDataStore.emitChange();

    return ture;
});

module.exports = AppDataStore;