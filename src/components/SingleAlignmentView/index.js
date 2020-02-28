import React from "react";
import './style.scss'
import '../../styles/main.scss'

class SingleAlignmentView extends React.Component{
    render() {
        return(
               <div>
                   <div className={`email-signature ${this.props.className}`}>
                       <div>
                           <h3>Name Surname</h3>
                           <p>Web developer</p>
                           <p>
                               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                               when an unknown printer took a galley of type and scrambled it to make a
                               type specimen book.
                           </p>
                       </div>
                       <div>
                           <div style={{backgroundImage: 'https://images.pexels.com/photos/2029253/pexels-photo-2029253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}></div>
                           <ul>
                               <li><a href="#"><i className="icon-facebook-icon"></i></a></li>
                               <li><a href="#"><i className="icon-twitter-icon"></i></a></li>
                               <li><a href="#"><i className="icon-date-icon"></i></a></li>
                           </ul>
                       </div>
                   </div>
               </div>

    )
    }
}

export default SingleAlignmentView;