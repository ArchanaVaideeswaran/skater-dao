import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "YOUR_MODULE_ADDRESS",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Wheel Addict Helmet",
        description: "This NFT will give you access to SkaterDAO!",
        image: readFileSync("scripts/assets/helmet.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()