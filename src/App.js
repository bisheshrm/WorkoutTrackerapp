import { useState } from "react";
import NewWorkout from "./components/NewWorkout/NewWorkout";
import Workouts from "./components/Workouts/Workouts";

const testWorkouts = [
  {
    id: "w1",
    plan: 1,
    week: 1,
    workoutTitle: "Barbell Squats",
    setsxrepsxweights: "4X12X135",
  },
  {
    id: "w2",
    plan: 2,
    week: 1,
    workoutTitle: "Bench Press",
    setsxrepsxweights: "1x12x135 1x8x185 1x6x225 1x3x245 1x12x135",
  },
  {
    id: "w3",
    plan: 1,
    week: 1,
    workoutTitle: "Pull-ups",
    setsxrepsxweights: "1x10xbodywt 1x8x+45 1x4x+90 1x6xbodywt",
  },
  {
    id: "w4",
    plan: 1,
    week: 1,
    workoutTitle: "Overhead press",
    setsxrepsxweights: "4x8x115",
  },
];
function App() {
  const [workouts, setWorkouts] = useState(testWorkouts);

  const addWorkoutHandler = (workout) => {
    setWorkouts((prevWokouts) => {
      return [workout, ...prevWokouts];
    });
  };

  return (
    <div>
      <NewWorkout onAddWorkout={addWorkoutHandler} /> 
      <Workouts workout={workouts} />
    </div>
  );
}

export default App;
