import {
  Controller,
  Get,
  Param,
  Query,
  Body,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { Types } from 'mongoose';
import {
  CreateCustomerDto,
  CustomerQuery,
  CustomerResultDto,
  PaginatedCustomerResultDto,
  UpdateCustomerDto,
} from './customer.dto';
import { BodySchemaPipe } from '../utils/bodyValidate.pipe';
import { CustomerService } from './customer.service';
import { LoggerService } from '../logger';
import {
  CreateCustomerValidationSchema,
  UpdateCustomerValidationSchema,
  CustomerQueryParamsSchema,
} from './customer.validation';
import { MongoObjectIdPipe } from '../utils/idValidate.pipe';
import { QueryParamsSchemaPipe } from '../utils/queryParamsValidate.pipe';
import { Roles } from '../auth/auth.decorator';

@Controller('customer')
@Roles('Admin', 'Super Admin')
export class CustomerController {
  constructor(
    private readonly log: LoggerService,
    private readonly customerService: CustomerService,
  ) {}

  @Get()
  async getCustomers(
    @Query(new QueryParamsSchemaPipe(CustomerQueryParamsSchema))
    customerQuery: CustomerQuery,
  ): Promise<PaginatedCustomerResultDto> {
    return this.customerService.getCustomers(customerQuery);
  }

  @Get(':customerId')
  async getCustomer(
    @Param('customerId', MongoObjectIdPipe) customerId: Types.ObjectId,
  ): Promise<CustomerResultDto> {
    return this.customerService.findCustomerById(customerId);
  }

  @Post()
  // @Roles('Super Admin')
  async createCustomer(
    @Body(new BodySchemaPipe(CreateCustomerValidationSchema))
    createCustomerBodyDto: CreateCustomerDto,
  ): Promise<CustomerResultDto> {
    return this.customerService.createCustomer(createCustomerBodyDto);
  }

  @Patch(':customerId')
  // @Roles('Super Admin')
  async updateCustomer(
    @Param('customerId', MongoObjectIdPipe) customerId: Types.ObjectId,
    @Body(new BodySchemaPipe(UpdateCustomerValidationSchema))
    updateCustomerBodyDto: UpdateCustomerDto,
  ): Promise<CustomerResultDto> {
    return this.customerService.updateCustomer(
      customerId,
      updateCustomerBodyDto,
    );
  }

  @Delete(':customerId')
  // @Roles('Super Admin')
  async deleteCustomer(
    @Param('customerId', MongoObjectIdPipe) customerId: Types.ObjectId,
  ) {
    return this.customerService.deleteCustomer(customerId);
  }
}
