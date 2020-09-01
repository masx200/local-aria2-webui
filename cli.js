#!/usr/bin/env node
import child_process from "child_process";
import path, { dirname } from "path";
import process from "process";
import { fileURLToPath } from "url";
import os from "os";
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cwd = path.join(__dirname, "static");

const { spawn } = child_process;
const execfile =
    os.platform() === "win32" ? "live-server" + ".cmd" : "live-server";
const cmd = path.join(__dirname, "node_modules", ".bin", execfile);
const args = [...["--no-browser", "--verbose"], ...process.argv.slice(2)];
const sp = spawn(cmd, args, { cwd });
console.log("cwd: " + cwd);
console.log("\n");
console.log("cmd: " + cmd);
console.log("\n");
console.log("args: ", args);
console.log("\n");
sp.stdout.on("data", (data) => {
    console.log(` \n` + String(data)+` \n` );
});

sp.stderr.on("data", (data) => {
    console.error(` \n` + String(data)+` \n` );
});

sp.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
});
