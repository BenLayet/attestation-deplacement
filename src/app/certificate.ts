import {GoingOutReason} from './going-out-reason.enum';
import * as moment from 'moment';
import {Moment} from 'moment';

export class Certificate {
    name: string;
    birthDate: Moment;
    address: string;
    reason: GoingOutReason;
    date = moment();
    location: string;
}
