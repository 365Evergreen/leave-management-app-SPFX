import { SPFI } from "@pnp/sp";

export interface ILeaveFormProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  siteUrl: string;
  sp: SPFI
}
