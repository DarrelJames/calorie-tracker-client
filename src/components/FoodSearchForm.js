import React, {Component} from 'react';
import { debounce } from 'lodash'

class FoodSearchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchTerm: ''
    }

    this.startSearch = debounce(this.startSearch, 1000)
  }

  handleClear = () => {
    this.setState({searchTerm: ''})
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    }, () => {
        this.startSearch()
    })
  }

  startSearch = () => {
    if (this.state.searchTerm.length > 2) {
      this.props.onSubmit(this.state.searchTerm)
    }
  }

  render() {
    return (
      <div className="ui category search" >
        <div className="ui icon input" >
          <input
            className='prompt'
            name='searchTerm'
            placeholder="Search foods..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          >
          </input>
          {this.state.searchTerm && <i onClick={this.handleClear} className="times icon link red"/>}
          {!this.state.searchTerm && <i className="search icon"/>}
        </div>
      </div>
    )
  }
}
export default (FoodSearchForm)
