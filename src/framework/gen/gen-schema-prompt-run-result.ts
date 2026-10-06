import { TypeOfConst } from "../utils";

export const GenSchemaPromptRunResultStatuses = {
  Ok: "ok",
  UserCancelled: "user-cancelled",
} as const;

export type GenSchemaPromptRunResultStatus = TypeOfConst<
  typeof GenSchemaPromptRunResultStatuses
>;

export interface GenSchemaPromptRunResultBase<T> {}

export interface GenSchemaPromptRunResultOk<T>
  extends GenSchemaPromptRunResultBase<T> {
  readonly status: typeof GenSchemaPromptRunResultStatuses.Ok;
  readonly value: T;
}

export interface GenSchemaPromptRunResultUserCancelled<T>
  extends GenSchemaPromptRunResultBase<T> {
  readonly status: typeof GenSchemaPromptRunResultStatuses.UserCancelled;
}

export type GenSchemaPromptRunResult<T> =
  | GenSchemaPromptRunResultOk<T>
  | GenSchemaPromptRunResultUserCancelled<T>;

export function createGenSchemaPromptRunResultOk<T>(
  value: T,
): GenSchemaPromptRunResultOk<T> {
  return {
    status: GenSchemaPromptRunResultStatuses.Ok,
    value,
  };
}

export function checkIsGenSchemaPromptRunResultOk<T>(
  genSchemaPromptRunResult: GenSchemaPromptRunResult<T>,
): genSchemaPromptRunResult is GenSchemaPromptRunResultOk<T> {
  return (
    genSchemaPromptRunResult.status === GenSchemaPromptRunResultStatuses.Ok
  );
}

export function createGenSchemaPromptRunResultUserCancelled<
  T,
>(): GenSchemaPromptRunResultUserCancelled<T> {
  return {
    status: GenSchemaPromptRunResultStatuses.UserCancelled,
  };
}

export function checkIsGenSchemaPromptRunResultUserCancelled<T>(
  genSchemaPromptRunResult: GenSchemaPromptRunResult<T>,
): genSchemaPromptRunResult is GenSchemaPromptRunResultUserCancelled<T> {
  return (
    genSchemaPromptRunResult.status ===
    GenSchemaPromptRunResultStatuses.UserCancelled
  );
}
