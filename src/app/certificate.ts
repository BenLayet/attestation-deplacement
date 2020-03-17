import {GoingOutReason} from './going-out-reason.enum';

export class Certificate {
    name: string;
    birthDate: Date;
    address: string;
    reason: GoingOutReason;
}
