import {edtClient} from "../api/edtApi.js";


export class PexelsService {
  static async getPhotosByQuery (query, perPage = 10) {
    const {data} = await edtClient.post("/photos", {query, perPage})

    const mappedData = data.photos.map(pexelObj => ({
      id: pexelObj.id,
      mediumSrc: pexelObj.src.medium,
      small: pexelObj.src.small,
      src: pexelObj.url,
    }))
    return mappedData
  }
}