
import { prisma } from "../prisma";
import {User} from "../types"
function generateusername(name: string): string {
    const base =
    name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 20);

    const suffix = Math.random().toString(36).substring(2, 8);
    return `${base}-${suffix}`;
}

export async function ensureUserProfile(neon: {
    id: string;
    name: string;
    image?: string | null;

}): Promise<User> {
    const existing = await prisma.userProfile.findUnique({
        where: { id: neon.id },
    });

    if (existing) {
        return {
            id: existing.id,
            username: existing.username,
            displayName: neon.name,
            avatarUrl: neon.image ?? undefined,
        };
    }     
   const row = await prisma.userProfile.create({
        data: {
            id: neon.id,
            username: generateusername(neon.name), }
        })
        return {
            id: row.id,
            username: row.username,
            displayName: neon.name,
            avatarUrl: neon.image ?? undefined,
        };
}