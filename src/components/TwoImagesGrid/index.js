import React from "react";
import layoutImg from '../../images/layout.svg';
import './style.scss';


class TwoImagesGrid extends React.Component{
    render() {
        return(
                <div className="two-images-grid">
                    <div style={{backgroundImage:`url(${layoutImg})`}} className="poster mb-3"></div>
                    <div className="d-flex">
                        <div className="mr-4 d-flex">
                            <span>Share</span>
                            <ul className="social-icons ml-3">
                                <li><button className="btn-social facebook"><i className="icon-facebook"></i></button></li>
                                <li><button className="btn-social twitter"><i className="icon-Twitter"></i></button></li>
                                <li><button className="btn-social instagram"><i className="icon-instagram"></i></button></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="title mb-2">Title</h4>
                            <p className="date mb-2"><i className="icon-date"></i> <span>20.10.2019</span></p>
                            <p className="mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <div style={{backgroundImage:`url(${layoutImg})`}} className="poster mb-2"></div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default TwoImagesGrid;