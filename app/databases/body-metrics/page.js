import Link from "next/link";
import { bodyMetricsSorted } from "../../../lib/data";

export default function BodyMetricsDB() {
  const rows = bodyMetricsSorted();

  return (
    <>
      <div className="topbar">
        Fitness Tracker <span className="sep">/</span>{" "}
        <Link href="/databases">Databases</Link> <span className="sep">/</span>{" "}
        Body Metrics DB
      </div>
      <div className="page">
        <div className="page-header-icon">📏</div>
        <h1 className="page-title">Body Metrics DB</h1>

        <div className="table-wrap">
          <table className="collection">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Weight</th>
                <th>Arms</th>
                <th>Waist</th>
                <th>Height</th>
                <th>Body Fat</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name}>
                  <td className="name-cell">{r.name}</td>
                  <td>{r.date}</td>
                  <td>{r.weight}</td>
                  <td>{r.arms}</td>
                  <td>{r.waist}</td>
                  <td>{r.height}</td>
                  <td>{r.bodyFat ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
