import React from "react";
import layoutImg from '../../images/layout.svg';
import './style.scss';

class SingleAlignmentView extends React.Component{
    render() {
        return(
               <div>
                   <div className={`email-signature ${this.props.className}`}>
                       <div className="box mr-2">
                           <div style={{backgroundImage: `url(${layoutImg})`}} className="poster"></div>
                           <ul className="social-icons">
                               <li><button className="btn-social facebook"><i className="icon-facebook"></i></button></li>
                               <li><button className="btn-social twitter"><i className="icon-Twitter"></i></button></li>
                               <li><button className="btn-social instagram"><i className="icon-instagram"></i></button></li>
                           </ul>
                       </div>
                       <div>
                           <h3 className="user-name">Name Surname</h3>
                           <p className="position">Web developer</p>
                           <p className="description">
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                               when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book.
                           </p>
                       </div>
                   </div>
               </div>
    )}
}

export default SingleAlignmentView;