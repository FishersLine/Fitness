import Link from "next/link";

export default function Databases() {
  return (
    <>
      <div className="topbar">
        Fitness Tracker <span className="sep">/</span> Databases
      </div>
      <div className="page">
        <div className="page-header-icon">🗄️</div>
        <h1 className="page-title">Databases</h1>

        <div className="card-grid">
          <Link href="/databases/fitness" className="card">
            <div className="card-icon">🏋️</div>
            <div className="card-title">Fitness DB</div>
            <div className="card-sub">1 row = 1 set</div>
          </Link>
          <Link href="/databases/body-metrics" className="card">
            <div className="card-icon">📏</div>
            <div className="card-title">Body Metrics DB</div>
            <div className="card-sub">Weight, measurements & check-ins</div>
          </Link>
        </div>
      </div>
    </>
  );
}
