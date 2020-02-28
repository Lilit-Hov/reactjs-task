import React from "react";
import emailLayout1 from '../../images/email-layout1.svg';
import './style.scss';

class SingleGrid extends React.Component{
    render() {
        return(
            <div className="single-grid">
                <p className="category">Category Name</p>
                <h3 className="title">Title</h3>
                <ul className="post-info">
                    <li>Author Name</li>
                    <li><i className="icon-date"></i> <span className="date">20/20/2020</span></li>
                    <li><i className="icon-view"></i> <span className="view-count">255</span></li>
                </ul>
                <img src={emailLayout1} alt=""/>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <span>Share</span>
                <ul className="social-icons ml-3">
                    <li><button className="btn-social facebook"><i className="icon-facebook"></i></button></li>
                    <li><button className="btn-social twitter"><i className="icon-Twitter"></i></button></li>
                    <li><button className="btn-social instagram"><i className="icon-instagram"></i></button></li>
                </ul>
            </div>
        )}
}

export default SingleGrid;