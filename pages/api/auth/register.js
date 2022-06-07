import Wrapper, { Exception } from "next-api-wrapper";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/userModel";

export default Wrapper({
  POST: async (req) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Exception("Invalid Inputs.", 422);
    }

    await dbConnect();

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("User already exists.", 409);
    }

    const user = await User.create({ email, password });

    console.log(user);

    return { data: user };
  },
});
