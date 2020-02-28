import React from 'react';
import SelectBox from "./components/SelectBox";
import TemplateType from "./components/TemplateType";
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
                            image: 'https://images.pexels.com/photos/3597096/pexels-photo-3597096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                            title: 'Left Align Layout',
                            className: 'left-align',
                            pageName: 'select-left-align-view'
                        },
                        {
                            image: 'https://images.pexels.com/photos/3597096/pexels-photo-3597096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                            title: 'Center Align Layout',
                            className: 'center-align'
                        },
                        {
                            image: 'https://images.pexels.com/photos/3597096/pexels-photo-3597096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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
                            image: 'https://images.pexels.com/photos/2318776/pexels-photo-2318776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                            title: 'Single Image Grid',
                            className: 'single-grid',
                            value: 'single-grid'
                        },
                        {
                            image: 'https://images.pexels.com/photos/2318776/pexels-photo-2318776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                            title: '2 images grid',
                            className: 'two-images-grid',
                            value: 'two-images-grid'
                        },
                        {
                            image: 'https://images.pexels.com/photos/2318776/pexels-photo-2318776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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