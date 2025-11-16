import { ComponentGenTemplateParams } from "./component.params";

export default ({ nameComponent, description }: ComponentGenTemplateParams) =>
  `

# ${nameComponent}
${description ? `\n${description}\n` : ""}
\`\`\`jsx
import { ${nameComponent} } from "@/components";

export default () => <${nameComponent} />;
\`\`\`

`.trim();
