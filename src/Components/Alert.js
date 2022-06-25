import React from "react";

export default function Alert(props) {
    const capitalize = (str) => {
        let lower = str.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };
    return (
        <div style={{
            height: '50px'
        }}>
            {props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{ height: '50px', padding: '10px', borderRadius: '0px' }} role="alert">
                    <strong>{capitalize(props.alert.type)}!</strong> {props.alert.message}
                </div>}
        </div>

    );
}
