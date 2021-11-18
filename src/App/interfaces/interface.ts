export interface I_Meme {
  id?: number;
  titre: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
  fontWeight: string;
  underline: boolean;
  italic: boolean;
  frameX: number;
  frameY: number;
  imageId: number;
}

export interface I_Image {
  id: number;
  url: string;
  titre: string;
  h: number;
  w: number;
}
