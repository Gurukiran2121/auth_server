const authController = async (req, resp) => {
    try {
        resp.send("Auth controller");
    } catch (error) {
        console.error(error);
    }
};

export default authController;
