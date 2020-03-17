import {GoingOutReason} from './going-out-reason.enum';
import {Moment} from 'moment';

export class Certificate {
    name: string;
    birthDate: Moment;
    address: string;
    reason: GoingOutReason;
    date: Moment;
    location: string;
    signatureDataUrl: string;
}
