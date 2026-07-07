import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
  component: () => {
    useEffect(() => { window.location.replace("/login.html"); }, []);
    return null;
  },
});
