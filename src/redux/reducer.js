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

const mixcloudResults = (mixcloudResults=[], action) => {
  switch(action.type){
    case 'RETURN_MIXCLOUD':
    mixcloudResults = action.payload.map((item)=> {
      const {user: {username}, url, name, created_time} = item
      let new_hash = {username: username, url: url, name: name, created_time: created_time}
      return new_hash
      }
    )
    return mixcloudResults
    default:
    return mixcloudResults
  }
}

const userStore = (user=[], action) => {
  switch(action.type){
    case 'LOGIN':
    user = action.user
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
    debugger
    return action.playlists
    case 'ADD_LIST':
    return [...lists, action.payload]
    case 'DELETE_PLAYLIST':
    return action.playlists
    case 'ADD_SONG':
    return  action.playlists
    case 'ADD_MIXCLOUD':
    return action.playlists
    case 'REMOVE_SONG':
    return action.playlists
    case 'REMOVE_MIX':
    return action.playlists
    case 'UPDATE_LIST':
    return action.playlists
    default:
    return lists
  }
}

const selectedList = (selectedList={}, action) => {
  switch(action.type){
  case 'SELECTED_LIST':
  selectedList = action.payload
  return selectedList
  case 'REMOVE_SONG':
  selectedList.songs = selectedList.songs.filter((song) => song.id !== action.song)
  return selectedList
  case 'REMOVE_MIX':
  selectedList.mixclouds = selectedList.mixclouds.filter((mix) => mix.id !== action.mix)
  return selectedList
  case 'UPDATE_LIST':
  selectedList = action.playlists.find((list) => list.id === selectedList.id)
  return selectedList
  default:
  return selectedList
  }

}

const getMixcloud = (sets=[], action) => {
  switch(action.type){
    case 'GET_SETS':
    return action.sets
    default:
    return sets
  }
}

const getYoutube = (songs=[], action) => {
  switch(action.type){
    case 'GET_SONGS':
    return action.songs
    default:
    return songs
  }
}


const handleTrending = (trending=[], action) => {
  switch(action.type){
    case 'GET_TRENDING':
    return action.payload
    default:
    return trending
  }
}

const rootReducer = combineReducers({
  youtubeResults: youtubeResults,
  user: userStore,
  lists: userLists,
  selectedList: selectedList,
  handleTrending: handleTrending,
  mixcloudResults: mixcloudResults,
  getYoutube: getYoutube,
  getMixcloud: getMixcloud
})


export default rootReducer
