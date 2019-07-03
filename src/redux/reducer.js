import {combineReducers} from 'redux'

const youtubeResults = (results=[], action) => {
  switch(action.type){
    case 'RETURN_RESULTS':
      results= action.payload
      return results
    case 'RESET':
      results = []
      return results
    default:
    return results
  }
}



const rootReducer = combineReducers({
  youtubeResults: youtubeResults
})


export default rootReducer
