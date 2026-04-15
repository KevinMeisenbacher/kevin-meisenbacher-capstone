import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const songs = await prisma.songs.findMany()
  console.log(songs)
}

main()