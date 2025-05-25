import cors from "cors";
import timeout from "connect-timeout";
import app, { express } from "./server_initialization/index.js";
import authRouter from "./routes/auth.auth0.js";
import { allowedOrigins, allowedMethods } from "./constants/index.js";

const PORT = process.env.PORT || 4000;
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: allowedMethods,
  })
);

app.use(timeout("1m"));
app.use(express.json());

app.use(authRouter);
app.listen(PORT, () => {
  console.log(`Auth server is started at port ${PORT}`);
});
