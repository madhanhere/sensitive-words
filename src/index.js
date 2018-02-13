export const sensitiveWordsFilter = (content, words) => (
    content.replace(
        new RegExp(words.join('|'), 'ig'),
        '****'
    )
)
