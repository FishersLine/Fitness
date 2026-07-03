import Link from "next/link";
import { fitnessData } from "../../../lib/data";

const musclePill = {
  Chest: "pill-blue",
  Back: "pill-green",
  Legs: "pill-yellow",
  Shoulders: "pill-purple",
  Core: "pill-red",
  Glutes: "pill-yellow",
  Cardio: "pill-green",
};

export default function FitnessDB() {
  const rows = [...fitnessData].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <>
      <div className="topbar">
        Fitness Tracker <span className="sep">/</span>{" "}
        <Link href="/databases">Databases</Link> <span className="sep">/</span>{" "}
        Fitness DB
      </div>
      <div className="page page-wide">
        <div className="page-header-icon">🏋️</div>
        <h1 className="page-title">Fitness DB</h1>
        <p style={{ color: "var(--text-lighter)", marginTop: -14, marginBottom: 18 }}>
          1 row = 1 set &nbsp;·&nbsp; {rows.length} rows
        </p>

        <div className="table-wrap">
          <table className="collection">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>DOW</th>
                <th>Activity Type</th>
                <th>Workout</th>
                <th>Workout Type</th>
                <th>Exercise</th>
                <th>Muscle</th>
                <th>Equipment</th>
                <th>Type</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>Cardio Type</th>
                <th>RPE</th>
                <th>Duration (min)</th>
                <th>Distance (km)</th>
                <th>Completed</th>
                <th>1RM Estimate</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td className="name-cell">{r.name}</td>
                  <td>{r.date}</td>
                  <td>{r.dow}</td>
                  <td>{r.activityType}</td>
                  <td>{r.workout}</td>
                  <td>{r.workoutType}</td>
                  <td>{r.exercise}</td>
                  <td>
                    <span className={`pill ${musclePill[r.muscle] || ""}`}>
                      {r.muscle}
                    </span>
                  </td>
                  <td>{r.equipment || "—"}</td>
                  <td>{r.type}</td>
                  <td>{r.weight || "—"}</td>
                  <td>{r.reps || "—"}</td>
                  <td>{r.cardioType || "—"}</td>
                  <td>{r.rpe || "—"}</td>
                  <td>{r.durationMin || "—"}</td>
                  <td>{r.distanceKm || "—"}</td>
                  <td>{r.completed ? "✅" : "—"}</td>
                  <td>{r.oneRM ? r.oneRM.toFixed(1) : "—"}</td>
                  <td>{r.volume || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
