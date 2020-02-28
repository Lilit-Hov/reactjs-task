import React from 'react';
import SelectBox from "./components/SelectBox";
import TemplateType from "./components/TemplateType";
import emailLayout1 from './images/email-layout1.svg';
import emailLayout2 from './images/email-layout2.svg';
import emailLayout3 from './images/email-layout3.svg';
import pageLayout1 from './images/page-layout1.svg';
import pageLayout2 from './images/page-layout2.svg';
import pageLayout3 from './images/page-layout3.svg';
import './styles/main.scss';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectValue: null,
            optionData: [
                {
                    label: "Email signature layout",
                    value: 0,
                    radioName: 'alignment',
                    viewType: 'alignment-view',
                    templateTypes: [
                        {
                            image: emailLayout1,
                            title: 'Left Align Layout',
                            className: 'left-align',
                        },
                        {
                            image: emailLayout2,
                            title: 'Center Align Layout',
                            className: 'center-align'
                        },
                        {
                            image: emailLayout3,
                            title: 'Right Align Layout',
                            className: 'right-align'
                        }

                    ]
                },
                {
                    label: "Page layout",
                    value: 1 ,
                    radioName: 'grid',
                    viewType: 'grid-view',
                    templateTypes: [
                        {
                            image: pageLayout1,
                            title: 'Single Image Grid',
                            className: 'single-grid',
                            value: 'single-grid'
                        },
                        {
                            image: pageLayout2,
                            title: '2 images grid',
                            className: 'two-images-grid',
                            value: 'two-images-grid'
                        },
                        {
                            image: pageLayout3,
                            title: 'Slider grid',
                            className: 'slider-grid',
                            value: 'slider-grid'
                        }
                    ]
                },
            ]
        }
    }

    onSelectChange = (value) =>  {
        this.setState({
            selectValue: this.state.optionData[value]
        })
    };

    render() {
        return (
            <div className="app">
                <div className="container">
                    <SelectBox items={this.state.optionData} onChange={this.onSelectChange}/>
                    {
                        !!this.state.selectValue &&
                        <TemplateType items={this.state.selectValue} />
                    }
                </div>
            </div>
        )
    }
}

export default App;