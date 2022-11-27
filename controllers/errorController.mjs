import AppError from '../utils/appError.mjs';

const sendDevError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.sttaus,
    err: err
  });
};

const sendErrorProduction = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({ status: err.status, message: err.message });
  } else {
    res.status(500).json('Internal Server Error');
  }
};

const handleInvalidBody = () => new AppError('Your request body is invalid', 400);

const errorController = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'dev') {
    sendDevError(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.message === 'Invalid request body') error = handleInvalidBody();
    sendErrorProduction(error, res);
  }
};

export default errorController;
