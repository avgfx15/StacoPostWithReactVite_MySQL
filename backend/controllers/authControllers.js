// ~ DB Connection
import { dbConnect } from '../DB/connectDB.js';

// ~ bcryptjs
import bcrypt from 'bcryptjs';

// ~ jsonwebtoken
import jwt from 'jsonwebtoken';

// ~ Logger
import { success, warning } from '../logger.js';
import { CustomErrorHandler } from '../middleware/errorHandler.js';

// % Test Controller
export const authTestController = async (req, res) => {
  res.json('Auth Route is wotking');
};

// + Sign Up Controller
export const signUpController = async (req, res, next) => {
  // & Create Query For If User is Exist or Not
  const q = 'SELECT * FROM users WHERE email = ?';
  // & Check if exist
  dbConnect.query(q, [req.body.email], async (err, data) => {
    // & If error
    if (err) return next(CustomErrorHandler('error to connect DB', 500));

    // & If user exist
    if (data.length) return next(CustomErrorHandler('User already exist', 400));

    // + Create new User
    // & hash Password

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt);

    // & Create query to save in DB
    const q = 'INSERT INTO users (`email`, `password`) VALUE (?)';

    const values = [req.body.email, hashedPassword];

    dbConnect.query(q, [values], (err, data) => {
      warning(data);

      if (err) return next(CustomErrorHandler('Error to create new User', 401));
      else {
        success('New User Created');
        return res.status(201).json({
          message: `${req.body.email} , New User Created`,
          successStatus: true,
        });
      }
    });
  });
};

// % Sign In Controller
export const signInController = async (req, res, next) => {
  // & Create Query For If User is Exist or Not
  const q = 'SELECT * FROM users WHERE email = ?';
  // & Check
  dbConnect.query(q, [req.body.email], async (err, data) => {
    // & If error
    if (err) return next(CustomErrorHandler('error to connect DB', 500));

    // & If user not exist
    if (!data.length)
      return next(
        CustomErrorHandler('User not registered, Please SignUp First', 400)
      );
    // & If user exist
    // & Hash Password
    const isMatch = await bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    // & If password not match
    if (!isMatch) return next(CustomErrorHandler('Invalid Credentials', 400));
    // & If password match
    else {
      // & Create Token
      const token = jwt.sign(
        { id: data[0].id, email: data[0].email },
        process.env.JWT_SECRET,
        {
          expiresIn: '1h',
        }
      );
      const { password, ...userData } = data[0];
      return res
        .cookie('accessToken', token, {
          httpOnly: true,
          secure: true,
          sameSite: 'none',
        })
        .status(200)
        .json({
          message: 'User Sign In',
          successStatus: true,
          user: userData,
          token,
        });
    }
  });
};

// ! Sign Out Controller
export const signOutController = async (req, res) => {
  // ! Remove Cookie
  res
    .clearCookie('accessToken', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    })
    .status(200)
    .json({ message: 'User Sign Out', successStatus: true });
};
