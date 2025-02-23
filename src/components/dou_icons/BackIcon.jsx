import React from "react";
import { DouIcon } from ".";

export function BackIcon ( props ) {
    return (
        <DouIcon 
            className={`${props.className}`}
            type={"back"}
            event={props.onClick}
        />
    );

}