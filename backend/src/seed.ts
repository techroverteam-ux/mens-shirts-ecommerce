import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/User';
import dotenv from 'dotenv';

dotenv.config({ path: './backend.env' });

async function seed() {
  const uri = process.env.MONGODB_URI!;
  await mongoose.connect(uri);
  console.log('🔗 Atlas Connected for seed');
  
  const hashed = await bcrypt.hash('admin123', 10);
  await User.findOneAndUpdate(
    { email: 'admin@vchuki.com' },
    { email: 'admin@vchuki.com', password: hashed, role: 'admin' },
    { upsert: true, new: true }
  );
  
  const superHashed = await bcrypt.hash('super123', 10);
  await User.findOneAndUpdate(
    { email: 'superadmin@vchuki.com' },
    { email: 'superadmin@vchuki.com', password: superHashed, role: 'superadmin' },
    { upsert: true, new: true }
  );
  
  console.log('✅ Admins created in Atlas!');
  console.log('admin@vchuki.com / admin123');
  console.log('superadmin@vchuki.com / super123');
  mongoose.connection.close();
}

seed().catch(console.error);
