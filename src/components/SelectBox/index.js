import React from "react";
import './style.scss';

class SelectBox extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'placeholder'
        }
    }

    onValueChange = (e) => {
        this.setState({
            value: e.target.value
        });

        this.props.onChange(e.target.value)
    };

    render() {
        return(
            <div>
                <label className="text-uppercase label-text">Select Template</label>
                <select className="select-control" value={this.state.value}
                        onChange={(e) => this.onValueChange(e)}>
                    <option value="placeholder" disabled>Select template</option>
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