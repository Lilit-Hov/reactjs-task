import React from "react";
import "./style.scss";
import SingleAlignmentView from "../SingleAlignmentView";
import PageLayout from "../PageLayout";


class TemplateType extends React.Component {
    constructor(props) {
        super();
        this.state= {
            selectedRadio: 0,
            singleViewClass: ''
        }
    }

    render() {
        return(
            <div>
                <p className="text-uppercase label-text">Template type</p>
                <form className="template-list">
                    {
                        this.props.items.templateTypes.map((item,index) => (
                            <div className={`template-item ${index === this.state.selectedRadio ? 'active' : ''}`} key={index}>
                                <label>
                                    <input type="radio"
                                           checked={index === this.state.selectedRadio }
                                           onChange={(e) => this.setState({
                                               selectedRadio: index,
                                               singleViewClass: item.className
                                           })}
                                           value={`option-${index}`}
                                           name={this.props.items.radioName}/>
                                    <img src={item.image} className="poster" />
                                    <h4 className="title">{item.title}</h4>
                                </label>
                            </div>
                        ))
                    }
                </form>
                {
                    this.props.items.value === 0 ?
                    <SingleAlignmentView className={this.state.singleViewClass}  /> :
                    <PageLayout layoutType={this.props.items.templateTypes[this.state.selectedRadio]}/>
                }
            </div>
        )
    }
}

export default TemplateType;