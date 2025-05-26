import prisma from "../utils/prismaClient.js";

const authController = async (req, resp) => {
  const { email, name, sub, picture, email_verified } = req.body;

  const user = {
    email,
    name,
    auth0Id: sub,
    picture,
    emailVerified: email_verified,
    updatedAt: new Date(),
  };

  try {
    const savedUser = await prisma.user.upsert({
      where: {
        email: user.email,
      },
      update: {
        name: user.name,
        picture: user.picture,
      },
      create: user,
    });

    return resp.status(200).json(savedUser);
  } catch (error) {
    console.error(error);
    return resp
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

export default authController;
