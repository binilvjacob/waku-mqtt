const { createLightNode } = require("@waku/sdk");

// Define an async function to initialize and start the Light Node
const startWakuNode = async () => {
  try {
    // Create and start a Light Node with default bootstrapping
    const node = await createLightNode({ defaultBootstrap: true });
    await node.start();

    console.log("Waku node started successfully!");
    console.log("Local Peer ID:", node.libp2p.peerId.toString());

    // Handle clean shutdown (Ctrl+C to exit)
    process.on("SIGINT", async () => {
      await node.stop();
      console.log("Waku node stopped.");
      process.exit();
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

// Call the async function to start the Waku node
startWakuNode();
