import React from "react";
import './style.scss';

class SelectBox extends React.Component {
    render() {
        return(
            <div>
                <label className="text-uppercase label-text">Select Template</label>
                <select className="select-control"  onChange={(e) => this.props.onChange(e.target.value)}>
                    <option value="placeholder" selected disabled>Select template</option>
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
