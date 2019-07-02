//  <Search
//   loading={this.state.isLoading}
//   onResultSelect={this.handleResultSelect}
//   onSearchChange={_.debounce(this.handleSearchChange, 500, {
//     leading: true,
//   })}
//   results={this.state.results}
//   value={this.state.value}
//   {...this.props}
// />

// state = { isLoading: false, results: [], value: '' }
//
//
// handleSearch = (event) => {
//   this.setState({
//     searchTerm: event.target.value
//   })
// }
//
// handleResultSelect = (e, { result }) => this.setState({ value: result.title })
//
// handleSearchChange = (e, { value }) => {
//   this.setState({ isLoading: true, value })
//
//   setTimeout(() => {
//     if (this.state.value.length < 1) return this.setState(this.state)
//
//     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
//     const isMatch = result => re.test(result.title)
//
//     this.setState({
//       isLoading: false,
//       results: _.filter(source, isMatch),
//     })
//   }, 300)
//
// }



search(`jsconf`, opts, (err, results) => {
  if(err){
    return console.log(err)
  }
  else{
  console.dir(results)
}
})

var opts = {
  maxResults: 10,
  key: API_KEY,
  q: this.state.searchTerm
};
