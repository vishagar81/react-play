import React from 'react';
import { Motion, spring } from 'react-motion';
import range from 'lodash.range';

function reinsert(arr, from, to) {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

const springConfig = {stiffness: 300, damping: 50};
const itemsCount = 5;

class ReorderedListPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      delta: 0,
      mouse: 0,
      isPressed: false,
      lastPressed: 0,
      order: range(itemsCount),
      _isMounted: false
    };

    // Bind this to the functions
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
    this.setState({_isMounted: true});
  }

  componentWillUnmount(){
    //mutating the state directly as setState is not working !!!
    this.state._isMounted = false;
  }

  handleMouseDown(pos, pressY, {pageY}) {
    const {_isMounted} = this.state;
    if(_isMounted){
      this.setState({
        delta: pageY - pressY,
        mouse: pressY,
        isPressed: true,
        lastPressed: pos
      });
    }
  }

  handleMouseMove({pageY}) {
    const {isPressed, delta, order, lastPressed} = this.state;
    if (isPressed) {
      const mouse = pageY - delta;
      const row = clamp(Math.round(mouse / 100), 0, itemsCount - 1);
      const newOrder = reinsert(order, order.indexOf(lastPressed), row);
      this.setState({
        mouse: mouse,
        order: newOrder
      });
    }
  }

  handleMouseUp() {
    const {_isMounted} = this.state;

    if(_isMounted){
      this.setState({
        isPressed: false,
        delta: 0
      });
    }
  }

  render(){
    const {mouse, isPressed, lastPressed, order} = this.state;
    return (
      <div className="deck">
        {range(itemsCount).map(i => {
          const style = lastPressed === i && isPressed
            ? {
                scale: spring(1.1, springConfig),
                shadow: spring(16, springConfig),
                y: mouse
              }
            : {
                scale: spring(1, springConfig),
                shadow: spring(1, springConfig),
                y: spring(order.indexOf(i) * 100, springConfig)
              };
          return (
            <Motion style={style} key={i}>
              {({scale, shadow, y}) =>
                <div
                  onMouseDown={this.handleMouseDown.bind(null, i, y)}
                  className="deck-item"
                  style={{
                    boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                    zIndex: i === lastPressed ? 99 : i
                  }}>
                  {i + 1}
                </div>
              }
            </Motion>
          );
        })}
      </div>
    );
  }
}

export default ReorderedListPage;
