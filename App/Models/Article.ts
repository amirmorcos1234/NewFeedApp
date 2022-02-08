import Headline from './Headline';
import Multimedia from './Multimedia';

class Article {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: Multimedia[];
  headline: Headline;
  document_type: string;
  byline: {
    original: string;
  };

  constructor(
    abstract: string,
    web_url: string,
    snippet: string,
    lead_paragraph: string,
    source: string,
    multimedia: Multimedia[],
    headline: Headline,
    document_type: string,
    byline: {
      original: string;
    },
  ) {
    this.abstract = abstract;
    this.lead_paragraph = lead_paragraph;
    this.multimedia = multimedia;
    this.source = source;
    this.snippet = snippet;
    this.web_url = web_url;
    this.headline = headline;
    this.document_type = document_type;
    this.byline = byline;
  }
}

export default Article;
