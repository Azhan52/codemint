import bcrypt from 'bcrypt';
import connectDB from '../../models/db';
import User from '../../models/User';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    await connectDB();
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    // Here you can generate and return a JWT token for authentication

    return res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
}
