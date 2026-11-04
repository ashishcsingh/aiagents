const fs = require('fs');
const path = require('path');

const agentsDir = path.resolve(__dirname, '../agents');
const files = fs.readdirSync(agentsDir).filter(f => f.endsWith('.json'));

const REQUIRED_KEYS = [
  'id', 'name', 'slug', 'tagline', 'category', 'categoryLabel',
  'framework', 'frameworkLabel', 'author', 'github', 'license',
  'recommendedModels', 'toolsRequired', 'tags', 'description', 'quickstart'
];

const VALID_CATEGORIES = ['coding', 'research', 'multiagent', 'productivity', 'devops', 'data'];

let hasError = false;
const allAgents = [];

console.log(`Auditing ${files.length} agent manifests in ${agentsDir}...\n`);

for (const file of files) {
  const filePath = path.join(agentsDir, file);
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);

    for (const key of REQUIRED_KEYS) {
      if (data[key] === undefined || data[key] === null) {
        console.error(`❌ [${file}] Missing required key: "${key}"`);
        hasError = true;
      }
    }

    if (!VALID_CATEGORIES.includes(data.category)) {
      console.error(`❌ [${file}] Invalid category "${data.category}". Must be one of: ${VALID_CATEGORIES.join(', ')}`);
      hasError = true;
    }

    if (!data.github || !data.github.startsWith('https://github.com/')) {
      console.error(`❌ [${file}] "github" must be a valid GitHub URL`);
      hasError = true;
    }

    if (!data.quickstart || !data.quickstart.type || !data.quickstart.command) {
      console.error(`❌ [${file}] "quickstart" must have "type" and "command" string properties`);
      hasError = true;
    }

    allAgents.push(data);
    console.log(`✅ [${file}] Validated: ${data.name} (${data.frameworkLabel})`);
  } catch (err) {
    console.error(`❌ [${file}] JSON Parse Error: ${err.message}`);
    hasError = true;
  }
}

if (hasError) {
  console.error('\nValidation failed! Please fix the errors listed above.');
  process.exit(1);
} else {
  // Automatically compile bundled registry.json
  const registryPath = path.resolve(__dirname, '../registry.json');
  fs.writeFileSync(registryPath, JSON.stringify(allAgents, null, 2) + '\n');
  console.log(`\n🎉 All ${files.length} agent manifests passed audit! Updated registry.json.`);
}
