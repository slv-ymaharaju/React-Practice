import React from 'react';

const withSelected = WrappedComponent => {
  return class extends React.Component {
    state = {
      selected: ''
    };

    handleClick = event => {
      this.setState({ selected: event.target.innerText });
    };

    render() {
      return (
        <WrappedComponent
          selected={this.state.selected}
          handleClick={this.handleClick}
          {...this.props}
        />
      );
    }
  };
};

export default withSelected;
