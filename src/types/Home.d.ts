export type Image ={
  url: string;
  alt: string
}
export type Project = {
  slug: string;
  name: string;
  repoUrl: string;
  pageUrl: string;
  image: Image;
}