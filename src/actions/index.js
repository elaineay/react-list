let nextItemId = 3

export const addItem = text => ({
    type: 'ADD_ITEM',
    id: nextItemId++,
    text
})

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    id
})