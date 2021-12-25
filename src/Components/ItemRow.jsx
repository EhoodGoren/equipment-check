import React from "react";

function ItemRow({ index, name, fullQuantity, currentQuantity }) {
    return (
        <tr>
            <td>{index}</td>
            <td>{name}</td>
            <td>{fullQuantity}</td>
            <td>{currentQuantity}</td>
        </tr>
    )
}

export default ItemRow;
