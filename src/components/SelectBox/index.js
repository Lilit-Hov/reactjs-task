import React from "react";
import './style.scss';

class SelectBox extends React.Component {
    render() {
        return(
            <div>
                <label className="text-uppercase label-text">Select Template</label>
                <select className="select-control" value="0" onChange={(e) => this.props.onChange(e.target.value)}>
                    <option value="0" disabled>Select template</option>
                    {
                        this.props.items.map((item,index) => (
                            <option value={item.value} key={index}>{item.label}</option>
                        ))
                    }
                </select>
            </div>
        )
    }
}


export default SelectBox;