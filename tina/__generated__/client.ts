import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'a2e1094aa829608323296382bd1d7bfbb604ce50', queries,  });
export default client;
  