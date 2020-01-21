import React, {Component} from 'react';

class FoodForm extends Component {

  state = {searchTerm: ''}

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.searchTerm)
    this.setState({searchTerm: ''})
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    })
  }

  render() {
    return (
      <div className="ui category search" >

      <form onSubmit={this.handleSubmit}>
      <div className="ui icon input" >

          <input
            className='prompt'
            name='searchTerm'
            placeholder="Search foods..."
            value={this.state.searchTerm}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            >
          </input>

          <i className="search icon"> </i>
        </div>
        </form>

      </div>
    )
  }

}
export default (FoodForm)
