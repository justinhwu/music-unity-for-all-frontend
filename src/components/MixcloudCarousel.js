import React from 'react'
import YoutubeCard from './YoutubeCard'
import MixcloudCard from './MixcloudCard'
import Carousel from "react-multi-carousel"
import {Card} from 'semantic-ui-react'
import "react-multi-carousel/lib/styles.css"
import {connect} from 'react-redux'

class MixcloudCarousel extends React.Component{


  render(){
  return(
    <div
      style={{
        paddingBottom: '30px',
        position: 'relative'
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            paritialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            paritialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            paritialVisibilityGutter: 30
          }
        }}
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
      {this.props.mixcloud.map((video, index)=>
        <MixcloudCard key={index+1} mixcloudresults={video} show={false}/>
      )}

    </Carousel>
  </div>

    )
  }
}

const mapStateToProps = (state) => {
  return{
    mixcloud: state.getMixcloud
  }
}



export default connect(mapStateToProps)(MixcloudCarousel)
