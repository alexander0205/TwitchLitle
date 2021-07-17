export interface IURLParams {
  URL: string
  QueryParams: {}
}

export class URLParams implements IURLParams {
  constructor(public _URL: string,public _QueryParams: {}) {
    this.URL = _URL
    this.QueryParams = _QueryParams
  }
  URL: string
  QueryParams: {}
}
