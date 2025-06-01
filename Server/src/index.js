// index.js (or src/index.js depending on your structure)
const express = require('express');
const cookieParser = require('cookie-parser');
const fs = require('fs/promises');
const cors = require('cors');

const ServerConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./routes/userRoute.js');
const cartRouter = require('./routes/cartRoute.js');
const authRouter = require('./routes/authRoute.js');
const { isLoggedIn } = require('./validation/authValidator.js');
const uploader = require('./middlewares/multerMiddleware.js');
const cloudinary = require('./config/cloudinaryConfig.js');
const productRouter = require('./routes/productRoute.js');

const app = express();

app.use(cors({
    origin: "https://pizzer.vercel.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Connect to DB once
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (err) {
        console.error("DB connection error:", err);
        return res.status(500).json({ error: "Failed to connect to DB" });
    }
});

app.use('/user', userRouter);
app.use('/carts', cartRouter);
app.use('/auth', authRouter);
app.use('/products', productRouter);

app.get('/', (req, res) => {
    return res.json({ message: "Welcome to piZZer..." });
});

app.get('/ping', isLoggedIn, (req, res) => {
    console.log(req.body);
    console.log(req.cookies);
    return res.json({ message: "pong" });
});

app.post('/photo', uploader.single('incomingFile'), async (req, res) => {
    console.log(req.file);
    const result = await cloudinary.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    return res.json({ message: "Photo uploaded successfully", result });
});


module.exports = app; // Important for Vercel











// const express = require('express');
// const cookieParser = require('cookie-parser')
// const fs = require('fs/promises');
// const cors = require('cors');

// const ServerConfig = require('./config/serverConfig');
// const connectDB = require('./config/dbConfig');
// const user = require('./schema/userSchema');
// const userRouter = require('./routes/userRoute.js');
// const cartRouter = require('./routes/cartRoute.js');
// const authRouter = require('./routes/authRoute.js');
// const { isLoggedIn } = require('./validation/authValidator.js');
// const uploader = require('./middlewares/multerMiddleware.js');
// const cloudinary = require('./config/cloudinaryConfig.js');
// const productRouter = require('./routes/productRoute.js');


// const app = express();

// app.use(cors({
//     origin: "https://pizzer.vercel.app", // Replace with your client's origin for localhost
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add the methods you need
//     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
//     credentials: true // Allow credentials (cookies, authorization headers, etc.)
// }));

// app.use(cookieParser());
// app.use(express.json());
// app.use(express.text());
// app.use(express.urlencoded({ extended: true }));

// app.use('/user', userRouter);
// app.use('/carts', cartRouter);
// app.use('/auth', authRouter);
// app.use('/products', productRouter);

// app.get('/', (req, res) => {
//     return res.json({
//         message: "Welcome to piZZer..."
//     })
// })

// app.get('/ping', isLoggedIn, (req, res) => {
//     // controller
//     console.log(req.body);
//     console.log(req.cookies);
//     return res.json({message: "pong"});
// })

// app.post('/photo', uploader.single('incomingFile'), async (req, res) => {
//     console.log(req.file);
//     const result = await cloudinary.uploader.upload(req.file.path);
//     console.log("result from cloudinary", result);
//     await fs.unlink(req.file.path); // delete the file from the server after uploading to cloudinary
//     return res.json({
//         message: "photo uploaded successfully"
//     });
// })

// //server starts here
// app.listen(ServerConfig.PORT, async () => {
//     await connectDB();
//     console.log(`Server started at port ${ServerConfig.PORT}...!!`);
// });



