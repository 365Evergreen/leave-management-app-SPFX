// src/services/leaveService.ts
import { SPFI } from "@pnp/sp";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { LeaveFormData } from "../components/pages/request/Request";

export const addLeaveRequest = async (sp: SPFI, formData: LeaveFormData) => {
  const listName = "LeaveRequests"; // change to your SharePoint list name

  const item = await sp.web.lists.getByTitle(listName).items.add({
    Title: formData.leaveType || "",
    StartDate: formData.startDate ?? null,
    EndDate: formData.endDate ?? null,
    Reason: formData.reason || "",
  });

  if (!sp) {
    throw new Error("SP context not initialized");
  }

  return item;
};
