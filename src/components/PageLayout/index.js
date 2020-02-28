import React from "react";
import SingleGrid from "../SingleGrid";
import SliderGrid from "../SliderGrid";
import TwoImagesGrid from "../TwoImagesGrid";

class PageLayout extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                {
                    this.props.layoutType.value == 'single-grid' ? <SingleGrid /> :
                    this.props.layoutType.value == 'two-images-grid' ? <TwoImagesGrid /> : <SliderGrid />
                }
            </div>
        )
    }
}

export default PageLayout;