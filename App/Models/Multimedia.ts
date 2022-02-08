class Multimedia {
  rank: number;
  subtype: string;
  caption: string | null;
  credit: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  crop_name: string;

  constructor(
    rank: number,
    subtype: string,
    caption: string | null,
    credit: string | null,
    type: string,
    url: string,
    height: number,
    width: number,
    crop_name: string,
  ) {
    this.rank = rank;
    this.subtype = subtype;
    this.caption = caption;
    this.credit = credit;
    this.crop_name = crop_name;
    this.height = height;
    this.width = width;
    this.type = type;
    this.url = url;
  }
}

export default Multimedia;
