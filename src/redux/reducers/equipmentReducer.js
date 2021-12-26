import fullEquipmentList from '../../db';

const data = [...fullEquipmentList];
const initialState = data.map(item => ({
    ...item,
    currentQuantity: 0,
    original: true
}));

export default function equipmentReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ITEM': {
            const { item, quantity } = action;
            const updatedList = [...state];
            const changedItemIndex = updatedList.findIndex(({ name }) => name === item);
            updatedList[changedItemIndex].currentQuantity = quantity;
            return updatedList;
        }
        case 'ADD_ITEM': {
            const { name, fullQuantity, currentQuantity } = action;
            const updatedList = [...state];
            updatedList.push({name, fullQuantity, currentQuantity, original: false});
            return updatedList;
        }
        case 'REMOVE_ITEM': {
            const { name } = action;
            const updatedList = [...state].filter(item => item.name !== name);
            return updatedList;
        }
        default:
            return state;
    }
}
