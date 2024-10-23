import { getUserSession } from '@/lib/get-user-session';
import { prisma } from '@/prisma/prisma-clients';
import { NextResponse } from 'next/server';
import { authOptions } from '../[...nextauth]/route';

export const dinamic = 'force-dinamic';

// export async function GET(req: any, res: any) {
export async function GET() {
  try {
    const user = await getUserSession();
    // const user = await getUserSession(req, res, authOptions);

    if (!user) {
      return NextResponse.json(
        { message: 'Вы не авторизованны' },
        { status: 401 }
      );
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: '[USER_GET] Server error' },
      { status: 500 }
    );
  }
}
