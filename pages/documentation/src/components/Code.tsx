import React from "react";
import Highlight from "react-highlight";

export default function Code() {
    return (
        <Highlight className="language-typescript">
            {'export type CodeType = string;'}
        </Highlight>
    )
}