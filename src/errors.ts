export class BaseError extends Error {
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }

  public status: number;

  toJson(): { error: string; status: number } {
    return {
      error: this.message,
      status: this.status,
    };
  }
}

export class InternalServerError extends BaseError {
  constructor() {
    super("Internal Server Error", 500);
  }
}

export class NotFoundError extends BaseError {
  constructor() {
    super("Not Found", 404);
  }
}
