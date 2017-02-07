import React from 'react';
import NoteComponent from './NoteComponent';

class BulletinBoardPage extends React.Component {
  constructor(props){
				super(props);

				this.state = {
					notes: [
					]
				}

				this.update = this.update.bind(this)
				this.remove = this.remove.bind(this)
				this.eachNote = this.eachNote.bind(this)
			}

			componentWillMount(){
				if(this.props.count){
					const url = `https://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`
					fetch(url)
						.then(results => results.json())
						.then(array => array[0])
						.then(text => text.split(". "))
						.then(arr => arr.forEach(sentence => this.add(sentence)))
				}
			}

			nextId(){
				this.uniqueId = this.uniqueId || 0
				return this.uniqueId++
			}

			add(text){
				var notes = [
					...this.state.notes,
					{
						id: this.nextId(),
						note: text
					}
				]
				this.setState({notes})
			}

			update(newText, id) {
				let notes = this.state.notes.map( note => {
					if(note.id === id ) {
						note.note = newText
					}
					return note;
				})
				this.setState({notes})
				console.log(this.state.notes)
			}

			remove(id){
				let notes = this.state.notes.filter(note => note.id !== id)
				this.setState({notes})
			}

			eachNote(note){

				return (
					<NoteComponent key={note.id}
								   id={note.id}
								   onChange={this.update}
								   onRemove={this.remove}
									>{note.note}</NoteComponent>
				)
			}

			render(){
				return (
					<div className='board'>
						{this.state.notes.map(this.eachNote)}
						<button onClick={ () => this.add('New note') }>+</button>
					</div>
				)
			}
		}

		BulletinBoardPage.propTypes = {
			count: function(props, propName){
					if(typeof props[propName] !== "number"){
						return new Error("The count must be a number")
					}

					if(props[propName] > 100){
						return new Error("Creating " + props[propName] + " is ridiculous")
					}
				}
		}
export default BulletinBoardPage;
