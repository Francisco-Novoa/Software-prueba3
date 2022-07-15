import sequelize from "../database/database.js";

import { User } from "./users.js";

await sequelize.sync({ force: true });

export { User };
