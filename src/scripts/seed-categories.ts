import { db } from "@/db";
import { categories } from "@/db/schema";

const categoriesName = [
    "Car and Vehicle",
    "comdedy",
    "Education",
    "Gaming",
    "Enterainment",
    "film and Animation",
    "How-to and Style",
    "Music",
    "News and Politics",
    "People and Blogs",
    "Pets and Animals",
    "Science and Technology",
    "Sports",
    "Travel and Events",
]

async function main() {
    console.log("Seeding categories...");

    try {
        const values = categoriesName.map((name) => ({
            name,
            description: `Videos related to ${name.toLowerCase()}`,
        }))

        await db.insert(categories).values(values)

        console.log("seeded categories successfully");

    } catch(error) {
        console.error("Error seeding categories", error);
        process.exit(1);
    }
}

main()
