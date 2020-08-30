import {DefaultCrudRepository} from '@loopback/repository';
import {BorrowDt, BorrowDtRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BorrowDtRepository extends DefaultCrudRepository<
  BorrowDt,
  typeof BorrowDt.prototype.bid,
  BorrowDtRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(BorrowDt, dataSource);
  }
}
