import AdminNavMenu from "./AdminNavMenu";

export default function AdminLayout({ children }) {
  return (
    <>
      <div style={{ display: `flex`, gap: `5px` }}>
        <AdminNavMenu />
        <div style={{ width: `calc(100% - 245px)` }}>{children}</div>
      </div>
    </>
  );
}
