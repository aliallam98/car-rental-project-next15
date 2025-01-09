import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="py-10  flex items-center justify-center bg-white">
      <div className="container">{children}</div>
    </section>
  );
}
