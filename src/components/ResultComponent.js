import React, { Component } from "react";

export default class ResultComponent extends Component {
    render() {
        const { result } = this.props;
        return (
            <div className="text-right m-2 border border-dark p-auto card"> 
                {result}
            </div>
    )
        ;
    }
};