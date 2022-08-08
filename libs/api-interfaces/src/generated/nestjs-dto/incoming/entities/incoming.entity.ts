
import {Panel} from '../../panel/entities/panel.entity'
import {Company} from '../../company/entities/company.entity'


export class Incoming {
  id: string ;
panel?: Panel  | null;
panelId: string  | null;
company?: Company ;
companyId: string ;
}
