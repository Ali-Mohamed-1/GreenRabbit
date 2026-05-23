const fs = require('fs');
const path = require('path');
const dir = 'components/sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (let file of files) {
  let p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  
  if (!content.includes('framer-motion')) continue;

  // Add the import for Motion wrappers
  if (!content.includes('@/components/ui/motion')) {
    content = content.replace(/import \{([^}]+)\} from "framer-motion";/, 'import {$1} from "framer-motion";\nimport { MotionDiv, MotionP, MotionH1, MotionH2, MotionH3, MotionHeader } from "@/components/ui/motion";');
  }

  // Replace tags
  content = content.replace(/<motion\.div/g, '<MotionDiv');
  content = content.replace(/<\/motion\.div>/g, '</MotionDiv>');
  
  content = content.replace(/<motion\.p/g, '<MotionP');
  content = content.replace(/<\/motion\.p>/g, '</MotionP>');
  
  content = content.replace(/<motion\.h1/g, '<MotionH1');
  content = content.replace(/<\/motion\.h1>/g, '</MotionH1>');
  
  content = content.replace(/<motion\.h2/g, '<MotionH2');
  content = content.replace(/<\/motion\.h2>/g, '</MotionH2>');
  
  content = content.replace(/<motion\.h3/g, '<MotionH3');
  content = content.replace(/<\/motion\.h3>/g, '</MotionH3>');
  
  content = content.replace(/<motion\.header/g, '<MotionHeader');
  content = content.replace(/<\/motion\.header>/g, '</MotionHeader>');

  fs.writeFileSync(p, content);
}
