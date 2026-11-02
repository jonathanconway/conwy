import { nowPage } from "@/content";
import {
  Article,
  Book,
  CONTENT_TYPE_LABELS,
  Checklist,
  ChecklistItem,
  Commentary,
  Idea,
  Micro,
  Project,
  Prompt,
  Quote,
  Tool,
  Work,
  join,
  sentenceCase,
  titleCase,
} from "@/framework";

export const homeRoute = {
  title: "Home",
  url: "/",
};

export const articlesRoute = {
  title: "Articles",
  url: "/articles",
};

export function createArticlesArticleRoute(article: Article) {
  return {
    title: article.meta.title,
    url: join(articlesRoute.url, article.meta.slug),
  };
}

export const checklistsRoute = {
  title: "Checklists",
  url: "/checklists",
};

export function createChecklistsChecklistRoute(checklist: Checklist) {
  return {
    title: `${checklist.meta.title} checklist`,
    url: join(checklistsRoute.url, checklist.meta.slug),
  };
}

export function createChecklistsChecklistItemRoute(
  checklist: Checklist,
  checklistItem: ChecklistItem,
) {
  return {
    title: checklistItem.title,
    url: join(checklistsRoute.url, checklist.meta.slug, checklistItem.name),
  };
}

export const commentariesRoute = {
  title: "Commentaries",
  url: "/commentaries",
};

export function createCommentariesCommentaryRoute(commentary: Commentary) {
  const contentTypeLabel = CONTENT_TYPE_LABELS[commentary.meta.source.type];
  return {
    title: `Commentary on ${contentTypeLabel}: ${commentary.meta.source.title}`,
    url: join(commentariesRoute.url, commentary.meta.slug),
  };
}

export const communitiesRoute = {
  title: "Communities",
  url: "/communities",
};

export const contactRoute = {
  title: "Contact me",
  url: "/contact",
};

export const friendsRoute = {
  title: "Friends",
  url: "/friends",
};

export const ideasRoute = {
  title: "Ideas",
  url: "/ideas",
};

export function createIdeasIdeaRoute(idea: Idea) {
  return {
    title: idea.meta.title,
    url: join(ideasRoute.url, idea.meta.slug),
  };
}

export const microsRoute = {
  title: "Micros",
  url: "/micros",
};

export function createMicrosMicroRoute(micro: Micro) {
  return {
    title: micro.meta.shortBlurb ?? titleCase(micro.meta.slug),
    url: join(microsRoute.url, micro.meta.slug),
  };
}

export const nowRoute = {
  title: nowPage.meta.title,
  url: "/now",
};

export const promptsRoute = {
  title: "Prompts",
  url: "/prompts",
};

export function createPromptsPromptRoute(prompt: Prompt) {
  return {
    title: prompt.meta.title,
    url: join(promptsRoute.url, prompt.meta.slug),
  };
}

export const projectsRoute = {
  title: "Projects",
  url: "/projects",
};

export function createProjectsProjectRoute(project: Project) {
  return {
    title: project.meta.title,
    url: join(projectsRoute.url, project.meta.slug),
  };
}

export const quotesRoute = {
  title: "Quotes",
  url: "/quotes",
};

export function createQuotesQuoteRoute(quote: Quote) {
  return {
    title: sentenceCase(quote.meta.slug),
    url: join(quotesRoute.url, quote.meta.slug),
  };
}

export const readingsRoute = {
  title: "Reading",
  url: "/reading",
};

export function createReadingsReadingRoute(book: Book) {
  return {
    title: sentenceCase(book.meta.title),
    url: join(readingsRoute.url, book.meta.slug),
  };
}

export const studiesRoute = {
  title: "Studies",
  url: "/studies",
};

export const testimonialsRoute = {
  title: "Testimonials",
  url: "/testimonials",
};

export const toolsRoute = {
  title: "Uses",
  url: "/uses",
};

export function createToolsToolRoute(tool: Tool) {
  return {
    title: sentenceCase(tool.meta.title),
    url: join(toolsRoute.url, tool.meta.slug),
  };
}

export const worksRoute = {
  title: "Work",
  url: "/work",
};

export function createWorksWorkRoute(work: Work) {
  return {
    title: work.meta.client,
    url: join(worksRoute.url, work.meta.slug),
  };
}
