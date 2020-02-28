import React from "react";
import img1 from '../../images/email-layout1.svg'

class SingleGrid extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <p>Category Name</p>
                <h3>Title</h3>
                <ul>
                    <li>Author Name</li>
                    <li><i className="icon-date-icon"></i> <span className="date">20/20/2020</span></li>
                    <li><i className="icon-view-icon"></i> <span className="view-count">255</span></li>
                </ul>
                <img src={img1}/>
                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <span>Share</span>
                <ul>
                    <li><a href="#"><i className="icon-view-icon"></i></a></li>
                    <li><a href="#"><i className="icon-view-icon"></i></a></li>
                    <li><a href="#"><i className="icon-view-icon"></i></a></li>
                </ul>
            </div>
        )
    }
}

export default SingleGrid;