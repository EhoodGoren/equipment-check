import React from "react";
import { connect } from 'react-redux';
import { setItem } from '../redux/actions/equipmentActions';

function ItemRow({ index, name, fullQuantity, currentQuantity, setItem }) {
    const setQuantity = (e) => {
        const inputValue = e.target.value;
        let permitedValue = inputValue;
        if(inputValue > fullQuantity) permitedValue = fullQuantity;
        if(inputValue < 0) permitedValue = 0;
        setItem(name, permitedValue);
    }
    return (
        <tr>
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
        </tr>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        setItem: (item, quantity) => dispatch(setItem(item, quantity))
    }
}

export default connect(undefined, mapDispatchToProps)(ItemRow);
