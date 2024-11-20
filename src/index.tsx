import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PractitionerLandscape from "./PractitionerLandscape";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <PractitionerLandscape />
  </StrictMode>
);
