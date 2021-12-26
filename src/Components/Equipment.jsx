import React from "react";
import { connect } from 'react-redux';
import ItemRow from './ItemRow';
import './Equipment.css';

function Equipment({ equipment }) {
    return(
        <table id='equipment'>
            <tbody>
                <tr>
                    <th>#</th>
                    <th>Item name</th>
                    <th>Full quantity</th>
                    <th>Current quantity</th>
                    <th>Missing</th>
                </tr>
                {equipment.map(({ name, fullQuantity, currentQuantity, original }, index) => (
                    <ItemRow
                        key={`equipment-${name}`}
                        index={index}
                        name={name}
                        fullQuantity={fullQuantity}
                        currentQuantity={currentQuantity}
                        original={original}
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
