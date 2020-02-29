import React from "react";
import TwoImagesGrid from "../TwoImagesGrid";
import SingleGrid from "../SingleGrid";
import SliderGrid from "../SliderGrid";

class PageLayout extends React.Component{
    render() {
        return(
            <div>
                {
                    this.props.layoutType.value === 'single-grid' ? <SingleGrid /> :
                    this.props.layoutType.value === 'two-images-grid' ? <TwoImagesGrid /> :
                    <SliderGrid />
                }
            </div>
        )
    }
}

export default PageLayout;