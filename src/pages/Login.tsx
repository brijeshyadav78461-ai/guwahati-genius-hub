import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login UI only — backend not connected.");
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-muted px-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-card">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <GraduationCap className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Student Login</h1>
          <p className="mt-1 text-sm text-muted-foreground">Access your AICI dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div><Label htmlFor="lemail">Email</Label><Input id="lemail" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="student@email.com" /></div>
          <div><Label htmlFor="lpass">Password</Label><Input id="lpass" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" /></div>
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5">Sign In</Button>
        </form>
        <p className="mt-4 text-center text-xs text-muted-foreground">Forgot password? Contact your branch office.</p>
      </div>
    </div>
  );
};

export default Login;
