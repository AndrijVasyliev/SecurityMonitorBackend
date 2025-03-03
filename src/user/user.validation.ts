import * as Joi from 'joi';
import { ADMIN_ROLES, ORDER_VALUES } from '../utils/constants';

export const CreateUserValidationSchema = Joi.object({
  fullName: Joi.string().required(),
  phone: Joi.string().allow('').optional(),
  userRole: Joi.string()
    .valid(...ADMIN_ROLES)
    .required(),
  jobTitle: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const UpdateUserValidationSchema = CreateUserValidationSchema.fork(
  Object.keys(CreateUserValidationSchema.describe().keys),
  (schema) => schema.optional(),
);

export const UserQueryParamsSchema = Joi.object({
  offset: Joi.number().integer().min(0).optional(),
  limit: Joi.number().integer().min(1).optional(),
  search: Joi.string().optional(),
  fullName: Joi.string().optional(),
  phone: Joi.string().optional(),
  userRole: Joi.string()
    .valid(...ADMIN_ROLES)
    .optional(),
  jobTitle: Joi.string().optional(),
  email: Joi.string().optional(),
  // password: Joi.string().optional(),
})
  .keys({
    orderby: Joi.string().valid(
      'fullName',
      'phone',
      'userRole',
      'jobTitle',
      'email',
    ),
    direction: Joi.string().valid(...ORDER_VALUES),
  })
  .and('orderby', 'direction');
