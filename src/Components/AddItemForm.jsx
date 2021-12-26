import React, { useRef } from "react";
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/equipmentActions';
import './AddItemForm.css';

function AddItemForm({ equipment, addItem }) {
    const nameInput = useRef();
    const fullQuantityInput = useRef();
    const currentQuantityInput = useRef();

    const submitItem = () => {
        if(equipment.find(item => item.name === nameInput.current.value)){
            alert('Item already on the list');
            return;
        }
        addItem(nameInput.current.value, fullQuantityInput.current.value, currentQuantityInput.current.value);
    }
    return(
        <div id='add-item-form'>
            <h2 id='add-item-title'>Add Item</h2>
            <div id='item-name'>
                <label htmlFor='name' >Item name</label><br />
                <input name='name' ref={nameInput} placeholder="Enter item name" />
            </div>
            <div id='full-quantity'>
                <label htmlFor='full'>Full quantity</label><br />
                <input name='full' ref={fullQuantityInput} type='number' placeholder="Enter full quantity" />
            </div>
            <div id='current-quantity'>
                <label htmlFor='current'>Current quantity</label><br />
                <input name='current' ref={currentQuantityInput} type='number' placeholder={0} />
            </div>
            <button id='submit-item' type='submit' onClick={submitItem}>Add item</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addItem: (name, fullQuantity, currentQuantity) => dispatch(addItem(name, fullQuantity, currentQuantity))
    }
}

function mapStateToProps({ equipment }) {
    return {
        equipment
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemForm);
