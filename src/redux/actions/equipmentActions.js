export const setItem = (item, quantity) => ({
    type: 'SET_ITEM',
    item,
    quantity
});

export const addItem = (name, fullQuantity, currentQuantity= 0) => ({
    type: 'ADD_ITEM',
    name,
    fullQuantity,
    currentQuantity
});

export const removeItem = (name) => ({
    type: 'REMOVE_ITEM',
    name
});
