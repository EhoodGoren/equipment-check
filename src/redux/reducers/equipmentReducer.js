import fullEquipmentList from '../../db';

const data = [...fullEquipmentList];
const initialState = data.map(item => ({
    ...item,
    currentQuantity: 0
}));

export default function equipmentReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ITEM':
            const { item, quantity } = action;
            const updatedList = [...state];
            const changedItemIndex = updatedList.findIndex(({ name }) => name === item);
            updatedList[changedItemIndex].currentQuantity = quantity;
            return updatedList;
        default:
            return state;
    }
}
