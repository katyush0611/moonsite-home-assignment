import { Garment, GarmentType } from "../../models/garment.model";
import { APIService } from "./api.service";

class APIServiceImpl implements APIService {
  async fetchAllGarments(): Promise<Garment<GarmentType>[]> {
    const data = await fetch(
      "https://f32cf30e-6939-45f6-b650-40d5b43dc7f1.mock.pstmn.io/clothes"
    ).then((response) => response.json());
    return data;
  }
}

export { APIServiceImpl };
