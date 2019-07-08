import {combineReducers} from 'redux'

const youtubeResults = (searchResults=[], action) => {
  switch(action.type){
    case 'RETURN_RESULTS':
      searchResults = action.payload.map((item)=> {
        const {id: {videoId}, snippet: {title, publishedAt, channelTitle, description, thumbnails: {default: {url}}}} = item
        let new_hash = {videoId: videoId, title: title, publishedAt: publishedAt, channelTitle: channelTitle, description: description, url: url}
        return new_hash
        }
      )
      return searchResults
    case 'RESET':
      searchResults = []
      return searchResults
    default:
    return searchResults
  }
}

const userStore = (user=[], action) => {
  switch(action.type){
    case 'LOGIN':
    user = action.payload
    return user
    case 'LOGOUT':
    user = []
    return user
    default:
    return user
  }
}

const userLists = (lists=[], action) => {
  switch(action.type){
    case 'LOGIN':
    return action.payload.playlists
    case 'ADD_LIST':
    action.payload.image = ''
    action.payload.genre = null
    return [...lists, action.payload]
    case 'ADD_SONG':
    return  action.playlists
    case 'REMOVE_SONG':
    return action.playlists
    default:
    return lists
  }
}

const selectedList = (selectedList=[], action) => {
  switch(action.type){
  case 'SELECTED_LIST':
  selectedList = action.payload
  return selectedList
  case 'REMOVE_SONG':
  selectedList.songs = selectedList.songs.filter((song) => song.id !== action.song)
  return selectedList
  default:
  return selectedList
  }

}

const handleTrending = (trending=[], action) => {
  switch(action.type){
    case 'GET_TRENDING':
    trending = action.payload.map((item)=> {
      const {id: {videoId}, snippet: {title, publishedAt, channelTitle, description, thumbnails: {default: {url}}}} = item
      let new_hash = {videoId: videoId, title: title, publishedAt: publishedAt, channelTitle: channelTitle, description: description, url: url}
      return new_hash
    })
    return trending
    default:
    return trending
  }
}

const rootReducer = combineReducers({
  youtubeResults: youtubeResults,
  user: userStore,
  lists: userLists,
  selectedList: selectedList,
  handleTrending: handleTrending
})


export default rootReducer
