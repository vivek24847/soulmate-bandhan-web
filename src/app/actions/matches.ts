"use server";

import { cookies } from "next/headers";

export const getDiscover = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    const response = await fetch(
      `${process.env.BACKEND_URL}/api/discover`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          typeof result.message === "string"
            ? result.message
            : "Failed to fetch discover data",
        error: result.message || {},
        data: null,
      };
    }

    return {
      success: true,
      message: result.message || "Discover data fetched successfully",
      error: {},
      data: result.data || [],
    };
  } catch (error) {
    console.error("DISCOVER API ERROR:", error);

    return {
      success: false,
      message: "Something went wrong",
      error: {},
      data: null,
    };
  }
};




export const sendRequest = async (receiverId: string) => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    const response = await fetch(
      `${process.env.BACKEND_URL}/api/connection/send/${receiverId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message:
          typeof result.message === "string"
            ? result.message
            : "Failed to send request",
        error: result.message || {},
        data: null,
      };
    }

    return {
      success: true,
      message: result.message || "Request sent successfully",
      error: {},
      data: result.data || null,
    };
  } catch (error) {
    console.error("SEND REQUEST API ERROR:", error);

    return {
      success: false,
      message: "Something went wrong",
      error: {},
      data: null,
    };
  }
};