import { Garment, GarmentType } from "../../models/garment.model";

export interface APIService {
  fetchAllGarments: () => Promise<Garment<GarmentType>[]>;
}
