'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('replaces blacklist words with asterisks', function () {
    expect((0, _2.default)('The name of the NX will be the Nintendo Switch', ['Switch'])).toBe('The name of the NX will be the Nintendo ***');
});

test('replaces multiple instances of blacklist words', function () {
    expect((0, _2.default)('The name of the NX will be the Nintendo Switch.' + ' The switch will be awesome!', ['Switch'])).toBe('The name of the NX will be the Nintendo *****. The ***** will be awesome!');
});