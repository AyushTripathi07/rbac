import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;

let prisma;

if (!globalForPrisma.prisma) {
  prisma = new PrismaClient();
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
  }
} else {
  prisma = globalForPrisma.prisma;
}

export { prisma };