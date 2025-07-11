import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data: {
        username,
        password,
        firstName,
        lastName
    }
  })
  console.log(res);
}

insertUser("admin3", "123456", "Shruti", "Thakur")