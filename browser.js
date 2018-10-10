// const { execSync } = require('child_process');
// // stderr is sent to stdout of parent process
// // you can set options.stdio if you want it to go elsewhere
// let stdout = execSync('open http://www.google.com');


const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);
const ls = spawn('node', ['-v']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});