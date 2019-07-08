import React from 'react'
import Carousel from 'react-multi-carousel';
import YoutubeCard from './YoutubeCard'
import 'react-multi-carousel/lib/styles.css';
import {connect} from 'react-redux'
class Trending extends React.Component{

  constructor(){
    super()
    this.state = {
      trendingVideos: []
    }
  }

  componentDidMount(){
    this.setState({
      trendingVideos: this.props.trending
    })
  }

  render(){
  return(
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={2500}
      centerMode={false}
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
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
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
      >
      { this.props.trending.map((video, index)=>(
        <YoutubeCard result={video} key={index+1}/>
      ))}
    </Carousel>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    trending: state.handleTrending
  }
}

export default connect(mapStateToProps)(Trending)
