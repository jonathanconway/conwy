import { ComponentGenTemplateParams } from "./component-gen-template-params";

export const componentGenReadmeTemplate = ({
  componentName,
  description,
}: ComponentGenTemplateParams) =>
  `

# ${componentName}
${description ? `\n${description}\n` : ""}
\`\`\`jsx
import { ${componentName} } from "@/components";

export default () => <${componentName} />;
\`\`\`

`.trim();
