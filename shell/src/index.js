// You can write your own logic here to determine the actual url
window.remoteUrl = `${window.location.protocol}//${window.location.hostname}:3002/remoteEntry.js`;

// Use dynamic import here to allow webpack to interface with module federation code
import("./bootstrap");
