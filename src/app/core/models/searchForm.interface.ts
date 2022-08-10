type SearchType = 'random' | 'category' | 'searchText';

export interface ISearchForm {
  searchType: SearchType,
  searchCategory: string,
  searchText: string
}