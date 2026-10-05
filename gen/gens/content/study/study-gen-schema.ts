import { kebabCase } from "lodash";

import { BookCategories, StudyCategories, StudyStatuses } from "@/framework";
import { GenSchema, GenSchemaFieldTypes } from "@/framework/gen";
import {
  ArrayValidator,
  DateStringValidator,
  UrlValidator,
} from "@/framework/validation";

import { StudyGenParams } from "./study-gen-params";

export const studyGenSchema: GenSchema<StudyGenParams> = {
  name: "book",
  fields: {
    title: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    slug: {
      type: GenSchemaFieldTypes.Text,
      default: ({ valuesSoFar }) => kebabCase(valuesSoFar.title ?? ""),
    },

    mainUrl: {
      type: GenSchemaFieldTypes.Text,
      validators: [
        new UrlValidator<StudyGenParams, StudyGenParams["mainUrl"]>(),
      ],
    },
    institution: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    type: {
      type: GenSchemaFieldTypes.Text,
      required: true,
    },
    date: {
      type: GenSchemaFieldTypes.Text,
      required: true,
      validators: [
        new DateStringValidator<StudyGenParams, StudyGenParams["mainUrl"]>(),
      ],
    },
    status: {
      type: GenSchemaFieldTypes.Select,
      required: true,
      options: Object.values(StudyStatuses),
    },
    credential: {
      type: GenSchemaFieldTypes.Text,
      description: "For example: Certificate IV.",
    },
    mark: {
      type: GenSchemaFieldTypes.Text,
      description: "For example: Pass.",
    },
    description: {
      type: GenSchemaFieldTypes.Text,
    },
    category: {
      type: GenSchemaFieldTypes.Select,
      required: true,
      options: Object.values(StudyCategories),
    },
    linkUrls: {
      type: GenSchemaFieldTypes.TextList,
      validators: [
        new ArrayValidator<
          StudyGenParams,
          StudyGenParams["linkUrls"] & readonly string[],
          (StudyGenParams["linkUrls"] & readonly string[])[number]
        >(
          new UrlValidator<
            StudyGenParams["linkUrls"] & string[],
            (StudyGenParams["linkUrls"] & string[])[number]
          >(),
        ),
      ],
    },
  },
};
