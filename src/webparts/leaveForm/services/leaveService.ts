// src/services/leaveService.ts
import { SPFI } from "@pnp/sp";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/files";
import { LeaveFormData } from "../components/pages/request/Request";

export const addLeaveRequest = async (sp: SPFI, formData: LeaveFormData) => {
  if (!sp) {
    throw new Error("SP context not initialized");
  }

  const listName = "LeaveRequests";

  try {
    const list = sp.web.lists.getByTitle(listName);

    // 1. Add the item
    const itemAddResult = await list.items.add({
      Title: formData.leaveType || "",
      StartDate: formData.startDate ?? null,
      EndDate: formData.endDate ?? null,
      Reason: formData.reason || "",
    });

    console.log("itemAddResult", itemAddResult);

    // 2. Safely extract Id
    const itemId = itemAddResult?.Id || itemAddResult?.ID;

    if (!itemId) {
      throw new Error("Failed to retrieve new item ID");
    }

    // 3. Upload attachments if present
    if (formData.attachments?.length > 0) {
      await Promise.all(
        formData.attachments.map(async (file) => {
          try {
            await sp.web.lists
              .getByTitle(listName)
              .items.getById(itemId)
              .attachmentFiles.add(file.name, file);
          } catch (error) {
            console.error(`Failed to upload attachment ${file.name}:`, error);
          }
        })
      );
    }

    return { itemId, ...itemAddResult };
  } catch (error) {
    console.error("Error in addLeaveRequest:", error);
    throw error;
  }
};
