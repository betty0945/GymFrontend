import React, { useState } from 'react';
import './TrainerCreateWorkout.css';

function ExerciseForm( {index, exercise, onChange} ) {

  const handleChange = (e) => {
    onChange( index, {...exercise, [e.target.name] : e.target.value} );
  };

  return (
    <div className='exercise'>
      <div className='exercise-input'>
      <input
        value={exercise.sets}
        onChange={handleChange}
        name="sets"
        type="number"
        placeholder="Sets"
      />
      </div>
      <div className='exercise-input'>
      <input
        value={exercise.reps}
        onChange={handleChange}
        name="reps"
        type="number"
        placeholder="Reps"
      />
      </div>
      <div className='exercise-input'>
        <input
        value={exercise.weight}
        onChange={handleChange}
        name="weight"
        type="number"
        placeholder="Weight"
      /></div>
      <div className='exercise-input'> 
        <input
        value={exercise.exercise}
        onChange={handleChange}
        name="exercise"
        type="text"
        placeholder="Exercise"
      /></div>
    </div>
  );
};

function WorkoutForm({ onSubmit}) {
  const [workout, setWorkout] = useState({
    name: '',
    exercises: [
      {set: '', reps: '', weight: '', exercise: ''}
    ]
  });

  const handleExerciseChange = (index, updatedExercise) => {
    const updatedExercises = [ ...workout.exercises ];
    updatedExercises[index] = updatedExercise;
    setWorkout( {...workout, exercises: updatedExercises} );
  };

  const handleAddExercise = () => {
    setWorkout(
      { ...workout, exercises: [ ...workout.exercises, {set: '', reps: '', weight: '', exercise: ''} ] }
      );
  };

  const handleSubmit = () => {
    onSubmit(workout);
  };

  return (
    <div className='workout'>
      <form onSubmit={handleSubmit}>
        <div className='workout-name'>
          <input 
            type = "text"
            value = {workout.name}
            onChange={ (e) => setWorkout({ ...workout, name: e.target.value } )}
            placeholder='Workout Name'
          />
        </div>
        <div className='exercise'>
          {workout.exercises.map((exercise, index) => (
          <ExerciseForm 
          key={index}
          index={index}
          exercise={exercise}
          onChange={handleExerciseChange}
          />
          ))}
        </div>
        <div className='buttons'>
          <button className="add-exercise-button" type='button' onClick={handleAddExercise}>Add Exercise</button>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
};

function TrainerCreateWorkout() {
  const handleSubmit = (workout) => {
    fetch('/api/workouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(workout)
    }).then(response => {
      return response.text();
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <div className='title'>
      <h1>Create Workout</h1>
      <WorkoutForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default TrainerCreateWorkout;