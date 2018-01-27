import "reflect-metadata";

import {createExpressServer} from "routing-controllers";
import {createConnection} from "typeorm";

(async () => {
    await createConnection();

    const app = createExpressServer({
        controllers: [__dirname + "/controllers/*.ts"],
    });

    app.listen(3000);
})();