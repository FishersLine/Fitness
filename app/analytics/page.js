import { BarChart, LineChart } from "../../components/Charts";
import {
  volumeByWorkoutType,
  setsByMuscle,
  volumeByDate,
  best1RMByExercise,
  setsByDOW,
  cardioDistanceByDate,
  cardioDurationByType,
  cardioRPEByDate,
  weightTrend,
  waistTrend,
  armsTrend,
} from "../../lib/data";

export default function Analytics() {
  return (
    <>
      <div className="topbar">
        Fitness Tracker <span className="sep">/</span> Analytics
      </div>
      <div className="page page-wide">
        <div className="page-header-icon">📊</div>
        <h1 className="page-title">Analytics</h1>

        <h1 className="section-title">Workout Analytics</h1>
        <div className="chart-grid">
          <div className="chart-card">
            <h4>Volume by Workout Type</h4>
            <BarChart data={volumeByWorkoutType()} xKey="label" yKey="volume" unit="kg" />
          </div>
          <div className="chart-card">
            <h4>Sets by Muscle Group</h4>
            <BarChart data={setsByMuscle()} xKey="label" yKey="sets" />
          </div>
          <div className="chart-card">
            <h4>Volume Trend by Session</h4>
            <LineChart data={volumeByDate()} xKey="label" yKey="volume" unit="kg" />
          </div>
          <div className="chart-card">
            <h4>Best Estimated 1RM by Exercise</h4>
            <BarChart data={best1RMByExercise()} xKey="label" yKey="oneRM" unit="kg" />
          </div>
          <div className="chart-card">
            <h4>Sets Completed by Day of Week</h4>
            <BarChart data={setsByDOW()} xKey="label" yKey="sets" />
          </div>
        </div>

        <h1 className="section-title">Cardio Analytics</h1>
        <div className="chart-grid">
          <div className="chart-card">
            <h4>Distance per Session</h4>
            <LineChart data={cardioDistanceByDate()} xKey="label" yKey="distance" unit="km" />
          </div>
          <div className="chart-card">
            <h4>Total Duration by Cardio Type</h4>
            <BarChart data={cardioDurationByType()} xKey="label" yKey="minutes" unit="m" />
          </div>
          <div className="chart-card">
            <h4>Perceived Effort (RPE) Trend</h4>
            <LineChart data={cardioRPEByDate()} xKey="label" yKey="rpe" />
          </div>
        </div>

        <h1 className="section-title">Body Metrics Analytics</h1>
        <div className="chart-grid">
          <div className="chart-card">
            <h4>Bodyweight Trend</h4>
            <LineChart data={weightTrend()} xKey="label" yKey="weight" unit="kg" />
          </div>
          <div className="chart-card">
            <h4>Waist Trend</h4>
            <LineChart data={waistTrend()} xKey="label" yKey="waist" unit="cm" />
          </div>
          <div className="chart-card">
            <h4>Arms Trend</h4>
            <LineChart data={armsTrend()} xKey="label" yKey="arms" unit="cm" />
          </div>
        </div>
      </div>
    </>
  );
}
