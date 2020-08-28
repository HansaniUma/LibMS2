import {Entity, hasOne, model, property} from '@loopback/repository';
import {Book} from "./book.model";
import {Member} from "./member.model";

@model()
export class BorrowDt extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  bid?: number;

  @property({
    type: 'date',
    required: true,
  })
  returnDate: string;

  @property({
    type: 'date',
    required: true,
  })
  handoverDate: string;

  @property({
    type: 'date',
    required: true,
  })
  issuedDate: string;

  @hasOne(()=>Member)
  @property({
    type: 'number',
    required: true,
  })
  memId: number;

  @hasOne(()=>Book)
  @property({
    type: 'number',
    required: true,
  })
  bookId: number;



  constructor(data?: Partial<BorrowDt>) {
    super(data);
  }
}

export interface BorrowDtRelations {
  // describe navigational properties here
}

export type BorrowDtWithRelations = BorrowDt & BorrowDtRelations;