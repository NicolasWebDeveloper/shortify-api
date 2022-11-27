import validator from 'validator';
import Link from '../models/linkModel.mjs';
import AppError from '../utils/appError.mjs';
import randomString from '../utils/randomString.mjs';

export const createLink = async (req, res, next) => {
  try {
    if (!req.body.url) return next(new AppError('Invalid request body', 400));

    if (!validator.isURL(req.body.url))
      return next(new AppError('The provided URL is invalid', 400));

    const short = req.body.shortUrl || randomString(5);

    await Link.create({ shortUrl: short, originalUrl: req.body.url });
    res.status(201).json({
      status: 'success',
      url: `http://localhost:3000/${short}`
    });
  } catch (err) {
    return next(err);
  }
};

export const redirectToLink = async (req, res, next) => {
  try {
    if (!req.params.link) return next(new AppError('No link provided', 400));

    const link = await Link.findOne({ shortUrl: req.params.link });

    if (!link) return next(new AppError('Invalid link', 400));

    res.redirect(link.originalUrl);
  } catch (err) {
    return next(err);
  }
};
