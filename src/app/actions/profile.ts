"use server";

import { cookies } from "next/headers";

export const updateProfile = async (
  previousData: any,
  formData: FormData
) => {
  const data = {
    gender: formData.get("gender"),
    dateOfBirth: formData.get("dateOfBirth"),
    religion: formData.get("religion"),
    caste: formData.get("caste"),

    location: {
      city: formData.get("city"),
      state: formData.get("state"),
      country: formData.get("country"),
    },

    education: formData.get("education"),
    occupation: formData.get("occupation"),
    interests: formData.getAll("interests"),
    about: formData.get("about"),
  };

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;
     console.log("formData" , data)
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/profile`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    console.log("API RESULT:", result);

   if (!response.ok) {
  const errorMessage =
    typeof result.message === "string"
      ? result.message
      : Object.values(result.message || {})
          .flat()
          .join(", ");

  return {
    success: false,
    message: errorMessage || "Profile update failed",
    error: result.message || {},
    data: null,
  };
}

    return {
      success: true,
      message: result.message || "Profile updated successfully",
      error: {},
      data: result.data || null,
    };
  } catch (error) {
    console.error("PROFILE UPDATE ERROR:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
      error: {},
      data: null,
    };
  }
};