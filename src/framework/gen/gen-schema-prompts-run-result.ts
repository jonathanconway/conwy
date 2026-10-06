import { TypeOfConst } from "../utils";

export const GenSchemaPromptsRunResultStatuses = {
  Ok: "ok",
  UserCancelled: "user-cancelled",
} as const;

export type GenSchemaPromptsRunResultStatus = TypeOfConst<
  typeof GenSchemaPromptsRunResultStatuses
>;

export interface GenSchemaPromptsRunResultBase<T> {}

export interface GenSchemaPromptsRunResultOk<T>
  extends GenSchemaPromptsRunResultBase<T> {
  readonly status: typeof GenSchemaPromptsRunResultStatuses.Ok;
  readonly value: T;
}

export interface GenSchemaPromptsRunResultUserCancelled<T>
  extends GenSchemaPromptsRunResultBase<T> {
  readonly status: typeof GenSchemaPromptsRunResultStatuses.UserCancelled;
}

export type GenSchemaPromptsRunResult<T> =
  | GenSchemaPromptsRunResultOk<T>
  | GenSchemaPromptsRunResultUserCancelled<T>;

export function createGenSchemaPromptsRunResultOk<T>(
  value: T,
): GenSchemaPromptsRunResultOk<T> {
  return {
    status: GenSchemaPromptsRunResultStatuses.Ok,
    value,
  };
}

export function checkIsGenSchemaPromptsRunResultOk<T>(
  genSchemaPromptsRunResult: GenSchemaPromptsRunResult<T>,
): genSchemaPromptsRunResult is GenSchemaPromptsRunResultOk<T> {
  return (
    genSchemaPromptsRunResult.status === GenSchemaPromptsRunResultStatuses.Ok
  );
}

export function createGenSchemaPromptsRunResultUserCancelled<
  T,
>(): GenSchemaPromptsRunResultUserCancelled<T> {
  return {
    status: GenSchemaPromptsRunResultStatuses.UserCancelled,
  };
}

export function checkIsGenSchemaPromptsRunResultUserCancelled<T>(
  genSchemaPromptsRunResult: GenSchemaPromptsRunResult<T>,
): genSchemaPromptsRunResult is GenSchemaPromptsRunResultUserCancelled<T> {
  return (
    genSchemaPromptsRunResult.status ===
    GenSchemaPromptsRunResultStatuses.UserCancelled
  );
}
