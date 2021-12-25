import React from "react";

function AddItem() {
    return(
        <form>
            <h2>Add Item</h2>
            <label htmlFor='name' >Item name</label><br />
            <input name='name' placeholder="Enter item name" />
            <label htmlFor='full'>Full quantity</label><br />
            <input name='full' placeholder="Enter full quantity" />
            <label htmlFor='current'>Current quantity</label><br />
            <input name='current' type='number' placeholder={0} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddItem;
