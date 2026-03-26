import { LayoutDashboard, Users, BookOpen, BarChart3 } from "lucide-react";

const stats = [
  { icon: <Users className="h-6 w-6" />, label: "Total Students", value: "1,523" },
  { icon: <BookOpen className="h-6 w-6" />, label: "Active Courses", value: "12" },
  { icon: <BarChart3 className="h-6 w-6" />, label: "Leads This Month", value: "87" },
];

const AdminPanel = () => (
  <div className="min-h-[80vh] bg-muted">
    <div className="border-b border-border bg-card px-6 py-4">
      <div className="flex items-center gap-2">
        <LayoutDashboard className="h-5 w-5 text-primary" />
        <h1 className="text-lg font-bold text-foreground">Admin Dashboard</h1>
        <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 text-xs font-semibold text-accent">UI Placeholder</span>
      </div>
    </div>
    <div className="container py-8">
      <div className="grid gap-6 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-3 text-primary">{s.icon}</div>
            <p className="text-2xl font-extrabold text-foreground">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-border bg-card p-8 text-center shadow-card">
        <p className="text-muted-foreground">Full admin panel coming soon. This is a UI placeholder.</p>
      </div>
    </div>
  </div>
);

export default AdminPanel;
