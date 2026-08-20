"use server"

import { cookies } from "next/headers";


export const register = async (previousData: any,
  formData: FormData) => {
    const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    phone: formData.get("phone"),
  };


  try {
    const response = await fetch(`${process.env.BACKEND_URL}/api/auth/register`,{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()

    if (!response.ok) {

 
  const errorMessage =
    typeof result.message === "string"
      ? result.message
      : Object.values(result.message || {})
          .flat()
          .join(", ");
      return {
        success: false,
        message: errorMessage || "Registration failed",
        data: null,
      };
    }

    return {
      success: true,
      message: result.message || "Registration successful",
      data: result.data || null,
    };
  } catch (error) {
    console.error("REGISTER SERVER ACTION ERROR:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
      data: null,
    };
  }
    
 
}


export const login = async (
  previousData: any,
  formData: FormData
) => {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || "Login failed",
        error: result.error || {},
        data: null,
      };
    }

     const token = result.data?.accessToken;

    if (!token) {
      return {
        success: false,
        message: "Authentication token was not received",
        error: {},
        data: null,
      };
    }

    const cookieStore = await cookies();

    cookieStore.set("authToken", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, 
    });

    return {
      success: true,
      message: result.message || "Login successful",
      error: {},
      data: result.data || null,
    };
  } catch (error) {
    console.error("LOGIN SERVER ACTION ERROR:", error);

    return {
      success: false,
      message: "Unable to connect to server. Please try again.",
      error: {},
      data: null,
    };
  }
};