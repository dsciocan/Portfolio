import React from "react";

export default function Title(props) {
    return (
        <div className="py-24">
            <h3 className="text-5xl font-semibold text-white pl-10">{props.text}</h3>
        </div>
    )
}