import PocketBase from "pocketbase"

const pb = new PocketBase(process.env.NEXT_APP_POCKETBASE_URL)

export default pb
