import React from 'react'
import moment from 'moment'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import ExerciseDetail from './ExerciseDetail'
import './ExerciseForm.css'

const exercise = []

localStorage.setItem('exercise', JSON.stringify(exercise))


class ExerciseForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            dayWeek: moment().format('dddd'),
            name: '',
            weight: '',
            reps: '',
            sets: '',
            id: 0,
            isSubmited: false,
            exercise: JSON.parse(localStorage.getItem('exercise'))
        }
        this.deleteExercice = this.deleteExercice.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })  
    }

    deleteExercice (id) {
        let exercises = this.state.exercise.filter(ex => {
            return ex.id !== id
        })
        this.setState({
            exercise: exercises
        })
    }

    getExercises () {
        return this.state.exercise
    }

    editExercise(name, weight, reps, sets, exerciseName) {
        let exercise = this.getExercises()

        exercise = exercise.map(ex => {
            if(ex.name === exerciseName) {
                ex.name = name
                ex.weight = weight
                ex.reps = reps
                ex.sets = sets
            }
            return ex
        })

        this.setState({exercise})
    }

    handleSubmit(event) {
        event.preventDefault() 
        const min = 0
        const max = 1000000000
        const randomId = min + Math.random() * ( max - min) // Generate a random id for my ExerciseDetail
        this.setState({
            isSubmited: true,
            exercise: [...this.state.exercise, this.state],
            id: this.state.id + randomId,
            name: '',
            weight: '',
            reps: '',
            sets: '',
        }, () => console.log(this.state.exercise))
    }

    canBeSubmitted() {
        const {name, weight, reps, sets} = this.state
        return name.length > 0 && weight.length > 0 && reps.length > 0 && sets.length > 0
    }

    render() {
       const isEnabled = this.canBeSubmitted()
        return (
            <div>
                <Container>
                <form onSubmit={this.handleSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
                    <h1>Create an exercise</h1>
                    <div className='select'>
                        <select name='name' onChange={this.handleChange.bind(this)}>
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
                    <Form.Control type='number' name='weight'  value={this.state.weight} onChange={this.handleChange.bind(this)}/>
                    <br/>
                    <h3>Sets</h3>
                    <Form.Control type='number' name='sets'  value={this.state.sets} onChange={this.handleChange.bind(this)}/>
                    <br/>
                    <h3>Reps</h3>
                    <Form.Control type='number' name='reps'  value={this.state.reps} onChange={this.handleChange.bind(this)}/>
                    <br/>
                    <Button variant='primary' type='submit'  disabled={!isEnabled}>Create the exercise</Button>
                    </form> 
                    <br/>
                    {this.state.exercise.map(ex => {
                        return (
                                <ExerciseDetail 
                                editExercise={this.editExercise.bind(this)}
                                deleteExercise={this.deleteExercice}
                                exerciseName={ex.name}
                                dayWeek={ex.dayWeek}
                                weight={ex.weight}
                                reps={ex.reps}
                                sets={ex.sets}
                                key={ex.id}
                                id={ex.id}
                                /> ) })}
               
                </Container>
            </div>
        )
    }
}
export default ExerciseForm 