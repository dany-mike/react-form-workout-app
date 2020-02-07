import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


class ExerciseDetail extends React.Component {

        constructor() {
                super()
                this.state = {
                        isUpdating: false
                }
        }

        render () {
                return (
                        <div>
                        <br/>
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
                                        <Button variant="danger" onClick={() => this.props.deleteExercise(this.props.id)}>Delete</Button> 
                                </Card.Body>
                        </Card>
                        <br/>
                        </div>
         )
        }

}

export default ExerciseDetail 