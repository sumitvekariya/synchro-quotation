
import {Fabrication} from '../../fabrication/entities/fabrication.entity'
import {Incoming} from '../../incoming/entities/incoming.entity'
import {Outgoing} from '../../outgoing/entities/outgoing.entity'
import {Quotation} from '../../quotation/entities/quotation.entity'


export class Panel {
  id: string ;
name: string ;
fabrication?: Fabrication[] ;
incoming?: Incoming[] ;
outgoing?: Outgoing[] ;
quotation?: Quotation  | null;
quotationId: string  | null;
}
