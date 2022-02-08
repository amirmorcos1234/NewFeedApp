class Headline {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
  constructor(
    main: string,
    kicker: string,
    content_kicker: string,
    print_headline: string,
    name: string,
    seo: string,
    sub: string,
  ) {
    (this.content_kicker = content_kicker), (this.kicker = kicker);
    this.main = main;
    this.name = name;
    this.print_headline = print_headline;
    this.seo = seo;
    this.sub = sub;
  }
}

export default Headline;
