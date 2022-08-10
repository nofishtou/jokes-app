export interface JokeDTO {
  readonly categories: string[];
  readonly created_at: string;
  readonly icon_url: string;
  readonly id: string;
  readonly updated_at: string;
  readonly url: string;
  readonly value: string;
}

export interface IJoke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
  isFavourite: boolean;
}