import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Form from 'react-bootstrap/Form'


class ExerciseDetail extends React.Component {

        constructor(props) {
                super(props)
                this.state = {
                        isEdit: false
                }
        }

        onEdit() {
                this.setState({isEdit: true})
        }

        onEditSubmit(event) {
             event.preventDefault()
             this.props.editExercise(this.nameSelect.value, this.weightInput.value, this.repsInput.value, this.setsInput.value, this.props.exerciseName)
             this.setState({isEdit: false})
        }

        render () {
        return (
                <div>
                        {this.state.isEdit ? 
                        (
                                <div>
                                <form onSubmit={this.onEditSubmit.bind(this)}>
                                        <h3>Edit Exercise</h3>
                                <Card style={{ width: '25rem' }}>
                                <Card.Body>
                                <div className='select'>
                                        <select name='name' ref={nameSelect => this.nameSelect = nameSelect}>
                                                <option value=''>Choose an Exercise</option>
                                                <option value='Bench Press'>Bench Press</option>
                                                <option value='Squat'>Squat</option>
                                                <option value='Rowing'>Rowing</option>
                                                <option value='Pull Ups'>Pull Ups</option>
                                                <option value='Push Ups'>Push Ups</option>
                                                <option value='Dead Lift'>Dead Lift</option>
                                                <option value='Sit-Ups'>Sit-Ups</option>
                                        </select>
                                </div>
                                        <br/>
                                        <h3>Weight</h3>
                                        <Form.Control 
                                        type='number' 
                                        name='weight'
                                        ref={weightInput => this.weightInput = weightInput}/>
                                        <br/>
                                        <h3>Sets</h3>
                                        <Form.Control 
                                        type='number' 
                                        name='sets'
                                        ref={setsInput => this.setsInput = setsInput}/>
                                        <br/>
                                        <h3>Reps</h3>
                                        <Form.Control 
                                        type='number' 
                                        name='reps'   
                                        ref={repsInput => this.repsInput = repsInput}/>
                                        <br/>
                                        <Button variant='primary' type='submit'>Save</Button>
                                </Card.Body>
                                </Card>         
                                </form>
                                </div>
                        ) :
                        (      
                                <div>
                                <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                <Card.Title>{this.props.exerciseName}</Card.Title>
                                        <ListGroup>
                                                <ListGroupItem>
                                                        Day of the Week: {this.props.dayWeek} 
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                        Weight: {this.props.weight} 
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                        Sets: {this.props.sets}  
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                        Reps: {this.props.reps}
                                                </ListGroupItem>
                                        </ListGroup> 
                                        <br/>
                                        <Button variant="success" onClick={this.onEdit.bind(this)}>Edit</Button> 
                                        {` - `}
                                        <Button variant="danger" onClick={() => this.props.deleteExercise(this.props.id)}>Delete</Button> 
                                </Card.Body>
                                </Card>
                                <br/>
                                </div>
                        )}
                <br/>
              
                </div>
        )
        }

}

export default ExerciseDetail 