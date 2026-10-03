import { kebabCase } from "lodash";

import { BookCategories, ProjectSubTypes } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";
import { ArrayValidator, UrlValidator } from "@/framework/validation";

import { ProjectGenParams } from "./project-gen-params";

export const projectGenSchema: GenSchema<ProjectGenParams> = {
  name: "project",
  fields: {
    title: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    blurb: {
      type: GenSchemaFieldTypes.Text,
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => kebabCase(valuesSoFar.title ?? ""),
    },

    mainImageUrl: {
      type: GenSchemaFieldTypes.Text,
      validators: [
        new UrlValidator<ProjectGenParams, ProjectGenParams["mainImageUrl"]>(),
      ],
    },
    imageUrls: {
      type: GenSchemaFieldTypes.TextList,
      validators: [
        new ArrayValidator<
          ProjectGenParams,
          ProjectGenParams["imageUrls"],
          ProjectGenParams["imageUrls"][number]
        >(
          new UrlValidator<
            ProjectGenParams["imageUrls"],
            ProjectGenParams["imageUrls"][number]
          >(),
        ),
      ],
    },
    platforms: {
      type: GenSchemaFieldTypes.TextList,
    },
    socialLinkUrls: {
      type: GenSchemaFieldTypes.TextList,
      validators: [
        new ArrayValidator<
          ProjectGenParams,
          ProjectGenParams["socialLinkUrls"],
          ProjectGenParams["socialLinkUrls"][number]
        >(
          new UrlValidator<
            ProjectGenParams["socialLinkUrls"],
            ProjectGenParams["socialLinkUrls"][number]
          >(),
        ),
      ],
    },
    techsCategoryNames: {
      type: GenSchemaFieldTypes.TextList,
    },
    tags: {
      type: GenSchemaFieldTypes.TextList,
    },
    subType: {
      type: GenSchemaFieldTypes.Select,
      options: Object.values(ProjectSubTypes),
    },
  },
};
