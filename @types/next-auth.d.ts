import { UserRole } from '@prisma/client';
import { DefaultUser } from 'next-auth';
import { JWT, DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      name: string;
      image: string;
    };
  }
}

interface User extends DefaultUser {
  role: UserRole;
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string;
    role: UserRole;
  }
}