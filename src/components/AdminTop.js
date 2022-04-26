import Logo from "./Logo";
import AdminDetails from "./AdminDetails";

export default function AdminTop() {
  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        background: `rgba(255, 255, 255, 0.5)`,
        borderBottom: `1px solid white`,
        alignItems: `center`
      }}
    >
      <Logo />
      <AdminDetails />
    </div>
  );
}
