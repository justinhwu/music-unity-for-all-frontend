import React from 'react'
import Carousel from 'react-multi-carousel';
import YoutubeCard from './YoutubeCard'
import 'react-multi-carousel/lib/styles.css';
import searchYoutube from 'youtube-api-v3-search';
const API_KEY = 'AIzaSyATmQ8K3LV21JRsFhQ-ZRkPFQS5m4eheEE'
class Trending extends React.Component{
  state = {trendingVideos: []}

  componentDidMount(){
    const options = {
      part: 'snippet',
      type: 'video',
      chart: 'mostPopular',
      maxResults: 10,
      videoCategoryId: 10
    }
    searchYoutube(`${API_KEY}`, options, (error, result) => {
      let results = result.items.map((item)=> {
        const {id: {videoId}, snippet: {title, publishedAt, channelTitle, description, thumbnails: {default: {url}}}} = item
        let new_hash = {videoId: videoId, title: title, publishedAt: publishedAt, channelTitle: channelTitle, description: description, url: url}
        return new_hash
      })
      this.setState({
        trendingVideos: results
      })
    })
  }

  render(){
  return(
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
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
      {this.state.trendingVideos.map((video, index)=>(
        <YoutubeCard result={video} key={video.id}/>
      ))}
    </Carousel>
    )
  }
}

export default Trending
