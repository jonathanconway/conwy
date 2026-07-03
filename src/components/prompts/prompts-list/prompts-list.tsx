import * as promptsMap from "@/content/prompts";

import { Prompt } from "../prompt";

export function PromptsList() {
  const prompts = Object.values(promptsMap);

  return (
    <>
      {prompts.map((prompt) => (
        <Prompt prompt={prompt} />
      ))}
    </>
  );
}
