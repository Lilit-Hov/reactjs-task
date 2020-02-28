import React from "react";
import img1 from '../../images/email-layout1.svg'

class SingleGrid extends React.Component{
    render() {
        return(
            <div>
                <p>Category Name</p>
                <h3>Title</h3>
                <ul>
                    <li>Author Name</li>
                    <li><i className="icon-date"></i> <span className="date">20/20/2020</span></li>
                    <li><i className="icon-view"></i> <span className="view-count">255</span></li>
                </ul>
                <img src={img1} alt=""/>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <span>Share</span>
                <ul>
                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                    <li><a href="#"><i className="icon-Twitter"></i></a></li>
                    <li><a href="#"><i className="icon-instagram"></i></a></li>
                </ul>
            </div>
        )
    }
}

export default SingleGrid;