import { DataSource } from "typeorm";

export const dbConfig = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "endmodule4",
  entities: ["*/**/src/entity/*.js"],
  logging: false,
  synchronize: true,
});