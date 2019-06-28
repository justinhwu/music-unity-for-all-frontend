import {combineReducers} from 'redux'

const searchTextReducer = (oldSearchText='', action) => {
  switch(action.type){
    default :
    return oldSearchText
  }
}


const rootReducer = combineReducers({
  searchText: searchTextReducer
})


export default rootReducer
