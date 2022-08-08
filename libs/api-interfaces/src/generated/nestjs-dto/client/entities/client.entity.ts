
import {Quotation} from '../../quotation/entities/quotation.entity'


export class Client {
  name: string  | null;
address: string  | null;
id: string ;
quotations?: Quotation[] ;
}
