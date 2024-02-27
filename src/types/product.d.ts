export interface Ibanner {
  mainBannerId: number;
  title: string;
  sort: number;
  pcImageUrl: string;
  mobileImageUrl: string;
  linkUrl: string;
  startDate: string;
  endDate: string;
  creator: string;
  updater: string;
  deleter?: any;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
}

export interface IShortcut {
  mainShortcutId: number;
  title: string;
  sort: number;
  imageUrl: string;
  linkUrl: string;
  creator: string;
  updater: string;
  deleter?: any;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
}

export interface ICollection {
  id: number;
  type: "SINGLE" | "BUNDLE";
  code: string;
  title: string;
  subtitle: string;
  description: string;
  trialPeriod?: any;
  installmentPrice?: any;
  installmentPeriod?: any;
  rating: number;
  startDate?: any;
  endDate?: any;
  viewType?: any;
  createdAt: string;
  items: IItem[];
  media: IMedia[];
  thumbnail: IMedia;
  taggings: ITagging[];
  singleCollections: any[];
}

export interface IMedia {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  uuid: string;
  mimeType: string;
  uri: string;
  fileName: string;
  objectKey: string;
  deviceType?: any;
  collectionId: number;
  seq: number;
  itemKey?: any;
  type: string;
}

interface ITagging {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  collectionId: number;
  tagId: number;
  isOpen: boolean;
  tag: ITag;
}

interface ITag {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: number;
  code: string;
  name: string;
  description?: any;
  type: string;
}

interface IPublication {
  id: number;
  title: string;
  code: string;
  productId: number;
  prdType: number;
  detailEntity: string;
  content?: string;
  offeringType: string;
  rating: number;
  isExistResidual: boolean;
  isAdult: number;
  preface?: string;
  prefaceIconUrl?: string;
  productName: string;
  brandName: string;
  media: IMedia[];
  isTrial: boolean;
  tagsOnImage: string[];
  tagsOnDesc: string[];
  priceInfo: IPriceInfo;
  discounts: IDiscount[];
  applyCoupon: boolean;
}

interface IPriceInfo {
  price: number;
  discountPrice: number;
  discountRate: number;
  couponDiscountPrice?: number;
  couponDiscountRate?: number;
}

interface IItem {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  uuid: string;
  name: string;
  body?: any;
  collectionId: number;
  key: string;
  seq: number;
  entityType: string;
  entityId: number;
  optionKey?: any;
  publication: IPublication;
  prdType: number;
}

interface IDiscount {
  id: number;
  name?: any;
  type: string;
  calcMethod: string;
  value: number;
  activeFrom?: any;
  activeTo?: any;
  qty: number;
  remain?: any;
}