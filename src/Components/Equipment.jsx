import React from "react";
import { connect } from 'react-redux';
import ItemRow from './ItemRow';

function Equipment({ equipment }) {
    return(
        <table>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Item name</th>
                    <th>Full quantity</th>
                    <th>Current quantity</th>
                    <th>Missing</th>
                </tr>
                {equipment.map(({ name, fullQuantity, currentQuantity }, index) => (
                    <ItemRow
                        key={`equipment-${name}`}
                        index={index}
                        name={name}
                        fullQuantity={fullQuantity}
                        currentQuantity={currentQuantity}
                    />
                ))}
            </tbody>
        </table>
    )
}

function mapStateToProps({ equipment }) {
    return {
        equipment
    }
}

export default connect(mapStateToProps)(Equipment);
