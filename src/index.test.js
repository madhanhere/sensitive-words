import sensitiveWords from '.'

test('replaces blacklist words with asterisks', () => {
    expect(sensitiveWords('The name of the NX will be the Nintendo Switch', ['Switch']))
    .toBe('The name of the NX will be the Nintendo ***');
})

test('replaces multiple instances of blacklist words', () => {
    expect(sensitiveWords('The name of the NX will be the Nintendo Switch.' + 
    ' The switch will be awesome!', ['Switch']))
    .toBe('The name of the NX will be the Nintendo *****. The ***** will be awesome!');
})
