
import {Client} from '../../client/entities/client.entity'


export class Quotation {
  id: string ;
client?: Client  | null;
clientId: string  | null;
createdAt: Date ;
updatedAt: Date ;
}
