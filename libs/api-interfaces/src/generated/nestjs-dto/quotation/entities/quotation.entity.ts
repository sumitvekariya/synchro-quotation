
import {Client} from '../../client/entities/client.entity'
import {Panel} from '../../panel/entities/panel.entity'


export class Quotation {
  id: string ;
client?: Client  | null;
clientId: string  | null;
panels?: Panel[] ;
createdAt: Date ;
updatedAt: Date ;
}
