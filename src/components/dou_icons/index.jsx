import React from "react";
import "./dou_icons.css";
import Back from "../dou_icons/icons/Back.svg?react";

const icons = {
    back: {
        component: Back,
        props: {
            className: "icon-back-svg"
        }
    },
}

export function DouIcon ( {type, className, event } ) {

    const icon  = icons[type];

    if (!icon) {
        return null;
    }

    return (
        <span
            className={ `icon-container-${type}`}
            onClick={event}
        >
            {React.createElement(icon.component, {...icon.props, className})}
        </span>
    );
}