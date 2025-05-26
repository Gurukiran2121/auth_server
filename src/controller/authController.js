const authController = async (req, resp) => {
    console.log("authController called");
    try {
        console.log(req.body);
    } catch (error) {
        console.error(error);
    }
};

export default authController;
