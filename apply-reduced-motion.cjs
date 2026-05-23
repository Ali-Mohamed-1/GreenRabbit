const fs = require('fs');
const path = require('path');
const dir = 'components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  
  if (!content.includes('framer-motion')) continue;

  if (!content.includes('useReducedMotion')) {
    content = content.replace(/import \{([^}]+)\} from "framer-motion";/, 'import {$1, useReducedMotion} from "framer-motion";');
  }

  const componentRegex = /(export function \w+\(\) \{|function \w+\(\) \{|const \w+ = React\.memo\(\(\) => \{|const \w+ = memo\(\([^)]*\) => \{)/g;
  content = content.replace(componentRegex, (match) => {
    if (match.includes('PhoneMockup')) return match;
    return match + '\n  const shouldReduceMotion = useReducedMotion();\n';
  });

  content = content.replace(/whileInView={({[^}]+})}/g, 'whileInView={shouldReduceMotion ? undefined : $1}\n            animate={shouldReduceMotion ? $1 : undefined}');
  content = content.replace(/transition={({[^}]+})}/g, 'transition={shouldReduceMotion ? { duration: 0 } : $1}');

  fs.writeFileSync(p, content);
}
