export interface Post {
  id: string
  title: string
  date: string
  contentHtml: string
  slug: string
}

export interface AllPosts {
  posts: {
    nodes: Post[]
  }
}