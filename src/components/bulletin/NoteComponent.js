import React from 'react';
import Draggable from 'react-draggable';

class NoteComponent extends React.Component{
			constructor(props){
				super(props);

				this.state = {
					editing: false
				}

				this.edit = this.edit.bind(this);
				this.remove = this.remove.bind(this);
				this.save = this.save.bind(this);
			}

			componentWillMount(){
				this.style = {
					right: this.randomBetween(0, window.innerWidth - 150, 'px'),
					top: this.randomBetween(0, window.innerHeight - 150, 'px')
				}
			}

			shouldComponentUpdate(nextProps, nextState){
				// used for performance optimisation.
				// if this hook is not implemented then even if we have not edited the note (or the newText is same as old text),
				// a re-render is kicked off
				return this.props.children !== nextProps.children || this.state !== nextState
			}

			componentDidUpdate(){
				if( this.state.editing ){
					this.refs.newText.focus()
					this.refs.newText.select()
				}
			}

			randomBetween(x, y, units){
				return (x + Math.ceil(Math.random() * (y-x))) + units
			}

			edit(){
				this.setState({
					editing: true
				});
			}

			save(){
				this.props.onChange(this.refs.newText.value, this.props.id)
				this.setState({
					editing: false
				});
			}

			remove(){
				this.props.onRemove(this.props.id)
			}

			renderDisplay(){
				return (
				<div className='note' style={this.style}>
					<p>{this.props.children}</p>
					<span>
						<button onClick={this.edit}>Edit</button>
						<button onClick={this.remove}>X</button>
					</span>
				</div>
					)
			}

			renderForm(){
				return (
					<div className='note' style={this.style}>
						<textarea ref="newText" defaultValue={this.props.children}></textarea>
						<button onClick={this.save}>Save</button>
					</div>
				)
			}

			render(){
				return ( <Draggable>
					{(this.state.editing ? this.renderForm() : this.renderDisplay())}
						</Draggable>
				)
			}
		}
export default NoteComponent;
