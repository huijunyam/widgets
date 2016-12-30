import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputName: ""};
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({inputName: event.currentTarget.value});
  }

  listMatches() {
    const matches = [];
    if (this.state.inputName.length !== 0) {
      const input = this.state.inputName.toLowerCase();
      this.props.names.forEach(name => {
        if (name.slice(0, input.length).toLowerCase() === input) {
          matches.push(name);
        }
      });
    } else {
      return this.props.names;
    }
    if (matches.length === 0) {
      matches.push("no matches");
    }
    return matches;
  }

  click(event) {
    event.preventDefault();
    this.setState({inputName: event.currentTarget.innerText});
  }

  render() {
    let result = this.listMatches().map((name, idx) => {
      return (<li key={idx} onClick={this.click.bind(this)}>{name}</li>);
    });
    return (
      <div className="auto-complete">
        <h1>Auto Complete</h1>
        <div className="list">
          <input
            type="text"
            placeholder="search..."
            onChange={this.handleInput.bind(this)}
            value={this.state.inputName}/>
          <ul>
            <ReactCSSTransitionGroup
             transitionName='auto'
             transitionEnterTimeout={500}
             transitionLeaveTimeout={500}>
             {result}
           </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

export default AutoComplete;
