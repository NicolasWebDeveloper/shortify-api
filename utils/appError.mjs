class AppError extends Error {
  constructor(message, statusCode) {
    super();
    this.statusCode = statusCode || 500;
    this.status = this.statusCode < 500 ? 'fail' : 'error';
    this.message = message || 'Internal Server error';
    this.isOperational = true;
  }
}

export default AppError;
