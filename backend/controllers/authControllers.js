// ~ DB Connection
import { dbConnect } from '../DB/connectDB.js';

// ~ bcryptjs
import bcrypt from 'bcryptjs';
import { success, warning } from '../logger.js';

// % Test Controller
export const authTestController = async (req, res) => {
  res.json('Auth Route is wotking');
};

// + Sign Up Controller
export const signUpController = async (req, res) => {
  // & Create Query For If User is Exist or Not
  const q = 'SELECT * FROM users WHERE email = ?';
  // & Check if exist
  dbConnect.query(q, [req.body.email], async (err, data) => {
    // & If error
    if (err)
      return res
        .status(500)
        .json({ message: 'error to connect DB', successStatus: false, err });

    // & If user exist
    if (data.length)
      return res
        .status(400)
        .json({ message: 'User already exist', successStatus: false });

    // + Create new User
    // & hash Password

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // & Create query to save in DB
    const q = 'INSERT INTO users (`email`, `password`) VALUE (?)';

    const values = [req.body.email, hashedPassword];

    dbConnect.query(q, [values], (err, data) => {
      warning(data);

      if (err)
        return res.status(401).json({
          message: 'Error to create new User',
          successStatus: false,
          err,
        });
      else {
        return res.status(201).json({
          message: `${req.body.email} , New User Created`,
          successStatus: true,
        });
      }
    });
  });
};

// % Sign In Controller
export const signInController = async (req, res) => {
  // & Create Query For If User is Exist or Not
  const q = 'SELECT * FROM users WHERE email = ?';
  // & Check
  dbConnect.query(q, [req.body.email], async (err, data) => {
    // & If error
    if (err)
      return res
        .status(500)
        .json({ message: 'error to connect DB', successStatus: false, err });
    // & If user not exist
    if (!data.length)
      return res
        .status(400)
        .json({ message: 'User not exist', successStatus: false });
    // & If user exist
    // & Hash Password
    const isMatch = await bcrypt.compare(req.body.password, data[0].password);
    // & If password not match
    if (!isMatch)
      return res
        .status(400)
        .json({ message: 'Password not match', successStatus: false });
    // & If password match
    else {
      const { password, ...userData } = data[0];
      return res.status(200).json({
        message: 'User Sign In',
        successStatus: true,
        user: userData,
      });
    }
  });
};
