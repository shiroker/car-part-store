export interface CarPart {
  id: number;
  name: string;
  carModel: string;
  carMarke: string;
  carPartType: string;
  barCode: string;
  price: number;
  rabatt: number;
  volumeInCube: number;
  totalWeightInKg: number;
  quantity: number;
}

export interface CarPartList {
  name: string;
  barCode: string;
  id: string;
  volumeInCube: number;
  totalWeightInKg: number;
  parts: CarPart[];
}

export interface CarPartListPackage {
  name: string;
  volumeInCube: number;
  totalWeightInKg: number;
  pakets: CarPartList[];
}

