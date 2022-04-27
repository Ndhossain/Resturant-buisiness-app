import AdminNavMenu from "./AdminNavMenu";

export default function AdminLayout({ children }) {
  return (
    <>
      <div style={{ display: `flex` }}>
        <AdminNavMenu />
        <div style={{ width: `80%` }}>{children}</div>
      </div>
    </>
  );
}
