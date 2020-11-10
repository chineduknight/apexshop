export type Status = "SUCCESS" | "REQUEST" | "ERROR";
export type ActionTypesObject = {
  request: string;
  success: string;
  error: string;
};

export function handleFetch<T = Record<string, any>>(
  state: T,
  status: Status,
  payload: any,
  key?: keyof T,
  many = false
) {
  const { errors, data, pagination } = payload;
  let newStatus = {};

  if (status === "REQUEST") {
    newStatus = {
      processing: true,
      processed: false,
      errors: {},
    };
  } else if (status === "SUCCESS") {
    if (many) {
      newStatus = {
        processing: false,
        processed: true,
        success: true,
        data,
        pagination,
      };
    } else {
      newStatus = {
        processing: false,
        processed: true,
        success: true,
        data,
      };
    }
  } else {
    newStatus = {
      processing: false,
      processed: true,
      success: false,
      errors,
    };
  }

  if (key) {
    return {
      ...state,
      [key]: {
        ...state[key],
        ...newStatus,
      },
    };
  }

  return {
    ...state,
    ...newStatus,
  };
}

export function extractStatus(type: any) {
  let status = type.split("_").pop();

  if (status !== "ERROR" && status !== "SUCCESS") {
    status = "REQUEST";
  }

  return status;
}

/**
 * This creates a success, request and error action for the specified action name
 * This makes creating action types a lot easier and less repetitive.
 * @param name The name of the action
 */
export function createActionType(name: string): ActionTypesObject {
  return {
    request: `${name}_REQUEST`,
    success: `${name}_SUCCESS`,
    error: `${name}_ERROR`,
  };
}