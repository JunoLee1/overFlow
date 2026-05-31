import {PrismaClient} from "@prisma/client"


// 프로그램 전역 저장소 globalThis
const globalForPrisma = globalThis as unknown as {prisma?:PrismaClient}

// 있으면 재사용 없으면 생성
export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if(process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma = prisma // 만든걸 전역 저장소에 저장
}

/*
const prisma = new PrismaClient()
export default prisma
*/