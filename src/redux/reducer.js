import {combineReducers} from 'redux'

const youtubeResults = (results=[], action) => {
  switch(action.type){
    case 'RETURN_RESULTS':
      results = action.payload.map((item)=> {
        const {id: {videoId}, snippet: {title, publishedAt, channelTitle, description}} = item
        let new_hash = {videoId: videoId, title: title, publishedAt: publishedAt, channelTitle: channelTitle, description: description}
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
    let finder = lists.filter((list)=> {
      if(action.playlist_ids.includes(`${list.id}`)){
        return list
      }}).map((list)=> list.songs.push(action.song))
    debugger
    let new_finder = lists.filter((list)=> !action.playlist_ids.includes(`${list.id}`))
    debugger
    return
    default:
    return lists
  }
}

const selectedList = (selectedList=[], action) => {
  switch(action.type){
  case 'SELECTED_LIST':
  selectedList = action.payload
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
