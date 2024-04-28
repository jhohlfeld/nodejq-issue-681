import { run as jq } from "node-jq";

jq(".", { foo: "bar" }, { input: "json" }).then(console.log);
