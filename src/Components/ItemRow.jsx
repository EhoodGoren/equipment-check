import React from "react";
import { connect } from 'react-redux';
import { setItem, removeItem } from '../redux/actions/equipmentActions';

function ItemRow({ index, name, fullQuantity, currentQuantity, original, setItem, deleteItem }) {
    const setQuantity = (e) => {
        const inputValue = e.target.value;
        let permitedValue = inputValue;
        if(inputValue > fullQuantity) permitedValue = fullQuantity;
        if(inputValue < 0) permitedValue = 0;
        setItem(name, permitedValue);
    }
    const userAddedItem = () => {
        if(original) return <td></td>
        return <td><button onClick={() => deleteItem(name)}>❌</button></td>
    }
    return (
        <tr className='item-row'>
            <td>{index}</td>
            <td>{name}</td>
            <td>{fullQuantity}</td>
            <td><input
                    className='current-quantity'
                    type='number'
                    placeholder={0}
                    min={0}
                    max={fullQuantity}
                    value={currentQuantity}
                    onChange={setQuantity}
                /></td>
            <td>{fullQuantity - currentQuantity}</td>
            {userAddedItem()}
        </tr>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        setItem: (name, quantity) => dispatch(setItem(name, quantity)),
        deleteItem: (name) => dispatch(removeItem(name))
    }
}

export default connect(undefined, mapDispatchToProps)(ItemRow);
