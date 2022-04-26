import AdminNavMenu from "./AdminNavMenu";
import AdminTop from "./AdminTop";

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminTop />
      <div style={{ display: `flex` }}>
        <AdminNavMenu />
        <div style={{ width: `80%` }}>{children}</div>
      </div>
    </>
  );
}
