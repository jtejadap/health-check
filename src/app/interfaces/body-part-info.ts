import { Affliction } from "./affliction";
import { PreventionTip } from "./prevention-tip";

export interface BodyPartInfo {
    id: string;
    title: string;
    icon: string;
    afflictions: Affliction[];
    preventionTips: PreventionTip[];
}
