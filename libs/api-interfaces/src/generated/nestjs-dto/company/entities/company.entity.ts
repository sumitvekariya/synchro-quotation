
import {Fabrication} from '../../fabrication/entities/fabrication.entity'
import {Incoming} from '../../incoming/entities/incoming.entity'
import {Outgoing} from '../../outgoing/entities/outgoing.entity'


export class Company {
  name: string ;
id: string ;
fabrication?: Fabrication[] ;
incoming?: Incoming[] ;
outgoing?: Outgoing[] ;
createdAt: Date ;
updatedAt: Date ;
}
