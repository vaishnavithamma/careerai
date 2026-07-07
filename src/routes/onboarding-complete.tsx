import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/onboarding-complete")({
  component: () => {
    useEffect(() => { window.location.replace("/dashboard.html"); }, []);
    return null;
  },
});
