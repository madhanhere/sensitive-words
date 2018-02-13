'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sensitiveWordsFilter = exports.sensitiveWordsFilter = function sensitiveWordsFilter(content, words) {
    return content.replace(new RegExp(words.join('|'), 'ig'), '****');
};