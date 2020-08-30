import {DefaultCrudRepository} from '@loopback/repository';
import {Member, MemberRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MemberRepository extends DefaultCrudRepository<
  Member,
  typeof Member.prototype.memId,
  MemberRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Member, dataSource);
  }
}
