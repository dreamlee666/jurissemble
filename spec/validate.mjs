import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const schema = JSON.parse(
  fs.readFileSync(path.join(here, "legal-module.schema.json"), "utf8"),
);
const validate = new Ajv2020({
  allErrors: true,
  strict: false,
  validateFormats: false,
}).compile(schema);
const exampleDir = path.join(here, "examples");
const files = fs
  .readdirSync(exampleDir)
  .filter((name) => name.endsWith(".module.json"));

let failed = false;
for (const file of files) {
  const value = JSON.parse(
    fs.readFileSync(path.join(exampleDir, file), "utf8"),
  );
  if (validate(value)) {
    console.log(`PASS ${file}`);
  } else {
    failed = true;
    console.error(`FAIL ${file}`);
    for (const error of validate.errors ?? []) {
      console.error(`  ${error.instancePath || "/"} ${error.message}`);
    }
  }
}

if (failed) process.exit(1);
