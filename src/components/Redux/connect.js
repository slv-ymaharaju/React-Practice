import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => {
  return {
    selected: state.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: event => {
      dispatch({
        type: 'SELECT',
        selected: event.target.innerText
      });
    }
  };
};

const HeaderWithSelectedRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderWithSelectedRedux;


// const mapStateToProps = state => { return { selected: state.selected }; };: This line defines the mapStateToProps function. The mapStateToProps function maps the state of the Redux store to the props of the React component. In this case, the selected property of the state is mapped to the selected prop of the Header component.

// const mapDispatchToProps = dispatch => { return { handleClick: event => { dispatch({ type: 'SELECT', selected: event.target.innerText }); } }; };: This line defines the mapDispatchToProps function. The mapDispatchToProps function maps the dispatch method of the Redux store to the props of the React component. In this case, the handleClick prop is a function that dispatches an action to the store when it is called. The action has a type of "SELECT" and a selected property that is set to the inner text of the target of the event.

// const HeaderWithSelectedRedux = connect( mapStateToProps, mapDispatchToProps)(Header);: This line uses the connect function to create a new component, HeaderWithSelectedRedux, that is connected to the Redux store. The connect function takes two arguments, mapStateToProps and mapDispatchToProps, and returns a new component that is connected to the store. The Header component is passed as an argument to the returned function, which wraps the Header component with the connection to the store.

// export default HeaderWithSelectedRedux;: This line exports the HeaderWithSelectedRedux component as the default export of the file.