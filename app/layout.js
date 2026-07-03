import "./globals.css";
import Sidebar from "../components/Sidebar";

export const metadata = {
  title: "Fitness Tracker",
  description: "A Notion-style fitness tracker — workouts, cardio, and body metrics.",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Sidebar />
          <div className="main">{children}</div>
        </div>
      </body>
    </html>
  );
}
