import {edtClient} from "../api/edtApi.js";

export class EDTService {
  static async getData() {
    const {data} = await edtClient.get("data")
    return data
  }
}