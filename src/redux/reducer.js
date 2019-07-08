import {combineReducers} from 'redux'

const youtubeResults = (results=[], action) => {
  switch(action.type){
    case 'RETURN_RESULTS':
      results = action.payload.map((item)=> {
        const {id: {videoId}, snippet: {title, publishedAt, channelTitle, description, thumbnails: {default: {url}}}} = item
        let new_hash = {videoId: videoId, title: title, publishedAt: publishedAt, channelTitle: channelTitle, description: description, url: url}
        return new_hash
        }
      )
      return results
    case 'RESET':
      results = []
      return results
    default:
    return results
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

const rootReducer = combineReducers({
  youtubeResults: youtubeResults,
  user: userStore,
  lists: userLists,
  selectedList: selectedList
})


export default rootReducer
