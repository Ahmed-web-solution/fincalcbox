import { useEffect, useState } from "react";

export default function IdleSonner() {
  const [SonnerComp, setSonnerComp] = useState<null | ((props: any) => JSX.Element)>(null);

  useEffect(() => {
    const load = () => {
      import("@/components/ui/sonner").then((mod) => {
        setSonnerComp(() => mod.Toaster);
      });
    };
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(load, { timeout: 2000 });
    } else {
      setTimeout(load, 1500);
    }
  }, []);

  if (!SonnerComp) return null;
  const Toaster = SonnerComp as any;
  return <Toaster position="top-right" richColors closeButton />;
}


