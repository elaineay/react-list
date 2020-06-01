let itemId = 0

export const listAppend = item => {
    return {
        type: 'LIST_APPENDER',
        id: itemId++,
        item
    };
};