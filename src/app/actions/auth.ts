"use server"


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
      return {
        success: false,
        message: result.message || "Registration failed",
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