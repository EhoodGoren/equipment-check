import React, { useRef } from "react";
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/equipmentActions';

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
        <div>
            <h2>Add Item</h2>
            <label htmlFor='name' >Item name</label><br />
            <input name='name' ref={nameInput} placeholder="Enter item name" />
            <label htmlFor='full'>Full quantity</label><br />
            <input name='full' ref={fullQuantityInput} placeholder="Enter full quantity" />
            <label htmlFor='current'>Current quantity</label><br />
            <input name='current' ref={currentQuantityInput} type='number' placeholder={0} />
            <button type='submit' onClick={submitItem}>Submit</button>
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
