const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const branchName = core.getInput('branch-name');
  console.log(`branch-name: ${branchName}`);
  const sanitizedBranchName = branchName.trim().toLowerCase().replace(/[\W_]+/g,"-").substring(0, 63);
  core.setOutput("sanitized-branch-name", sanitizedBranchName);

  console.log(`${branchName} -> ${sanitizedBranchName}`);
} catch (error) {
  core.setFailed(error.message);
}
