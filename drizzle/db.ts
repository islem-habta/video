import { drizzle } from "drizzle-orm/xata-http";
import { getXataClient } from "../xata";

// Create a mock database for development
const createMockDb = () => ({
  query: {
    users: {
      findMany: async () => [],
      findFirst: async () => null,
    },
    videos: {
      findMany: async () => [],
      findFirst: async () => null,
    },
  },
  insert: async () => ({ id: 'mock-id' }),
  update: async () => ({ id: 'mock-id' }),
  delete: async () => ({ id: 'mock-id' }),
});

let db: any;

try {
  const xata = getXataClient();
  db = drizzle(xata);
} catch (error) {
  console.warn('Failed to initialize database, using mock database for development');
  db = createMockDb();
}

export { db };
