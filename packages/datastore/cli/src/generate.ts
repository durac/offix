import { GraphbackPluginEngine } from "@graphback/core";
import { DataSyncPlugin } from "@graphback/datasync"
import { OffixDataStorePlugin } from "./OffixDataStorePlugin";
import { loadSchema } from "./utils";

export const generate = (schemaPath: string, outputPath: string) => {
    const schema = loadSchema(schemaPath);
    const pluginEngine = new GraphbackPluginEngine({
        schema,
        plugins: [
            // new DataSyncPlugin(),
            new OffixDataStorePlugin({ modelOutputDir: outputPath })
        ]
    });
    pluginEngine.createResources();
};
