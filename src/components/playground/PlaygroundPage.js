import React from 'react';
import { Motion, spring } from 'react-motion';

const PlaygroundPage = React.createClass({
  getInitialState(){
    return {
      open: false
    };
  },

  handleMouseDown() {
    this.setState({open: !this.state.open});
  },

  render(){
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}>
          Toggle
        </button>
        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`
              }} />
            </div>
          }
        </Motion>
      </div>
    );
  }
});

export default PlaygroundPage;
