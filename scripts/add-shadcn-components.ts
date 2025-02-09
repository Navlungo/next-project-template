import { execSync } from "child_process";

const components = [
  "accordion",
  "alert",
  "alert-dialog",
  "aspect-ratio",
  "avatar",
  "badge",
  "button",
  "calendar",
  "card",
  "carousel",
  "checkbox",
  "collapsible",
  "command",
  "context-menu",
  "dialog",
  "drawer",
  "dropdown-menu",
  "form",
  "hover-card",
  "input",
  "label",
  "menubar",
  "navigation-menu",
  "pagination",
  "popover",
  "progress",
  "radio-group",
  "scroll-area",
  "select",
  "separator",
  "sheet",
  "skeleton",
  "slider",
  "switch",
  "table",
  "tabs",
  "textarea",
  "toast",
  "toggle",
  "toggle-group",
  "tooltip",
];

console.log("Adding all shadcn components...");

components.forEach((component) => {
  try {
    console.log(`Adding ${component}...`);
    execSync(`npx shadcn@latest add ${component}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error adding ${component}:`, error);
  }
});

console.log("Finished adding components!");
