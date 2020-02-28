import React from "react";
import layoutImg from '../../images/layout.svg';
import './style.scss';

class SliderGrid extends React.Component{
    render() {
        return(
            <div className="slider-grid d-flex justify-space-between">
                <ul className="slider-list">
                    <li><img src={layoutImg} alt=""/></li>
                    <li><img src={layoutImg} alt=""/></li>
                    <li><img src={layoutImg} alt=""/></li>
                    <li><img src={layoutImg} alt=""/></li>
                </ul>
                <div style={{backgroundImage:`url(${layoutImg})`}} className="slider-active"></div>
                <div className="details">
                    <h4>Title</h4>
                    <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <button className="btn btn-filled xs mr-3">Button</button>
                    <button className="btn btn-filled xs">Button</button>
                    <ul className="bullet-list mt-4">
                        <li>Creative concept</li>
                        <li>Eco-friendly</li>
                        <li>Comes with an assembly guide</li>
                        <li>Customizable</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SliderGrid;