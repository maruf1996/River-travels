export const getNewAccessToken = async (token) => {
  // console.log(token);
  try {
    const res = await fetch(`http://localhost:5000/api/v1/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const { data } = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
